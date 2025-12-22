const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON request bodies

// CREATE - Add a new student
app.post('/api/students', (req, res) => {
  try {
    const {
      full_name,
      age,
      address,
      level,
      phone_number,
      joined_date,
      expected_graduation_date
    } = req.body;

    // Validation
    if (!full_name || !age || !address || !level || !phone_number || !joined_date || !expected_graduation_date) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    if (level !== 'master' && level !== 'bachelor') {
      return res.status(400).json({
        success: false,
        message: 'Level must be either "master" or "bachelor"'
      });
    }

    const stmt = db.prepare(`
      INSERT INTO students (full_name, age, address, level, phone_number, joined_date, expected_graduation_date)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      full_name,
      age,
      address,
      level,
      phone_number,
      joined_date,
      expected_graduation_date
    );

    res.status(201).json({
      success: true,
      message: 'Student created successfully',
      data: {
        id: result.lastInsertRowid,
        full_name,
        age,
        address,
        level,
        phone_number,
        joined_date,
        expected_graduation_date
      }
    });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// READ - Get all students
app.get('/api/students', (req, res) => {
  try {
    const stmt = db.prepare('SELECT * FROM students ORDER BY created_at DESC');
    const students = stmt.all();

    res.status(200).json({
      success: true,
      count: students.length,
      data: students
    });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// READ - Get a single student by ID
app.get('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;

    const stmt = db.prepare('SELECT * FROM students WHERE id = ?');
    const student = stmt.get(id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    res.status(200).json({
      success: true,
      data: student
    });
  } catch (error) {
    console.error('Error fetching student:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// UPDATE - Update a student by ID
app.put('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;
    const {
      full_name,
      age,
      address,
      level,
      phone_number,
      joined_date,
      expected_graduation_date
    } = req.body;

    // Check if student exists
    const checkStmt = db.prepare('SELECT * FROM students WHERE id = ?');
    const existingStudent = checkStmt.get(id);

    if (!existingStudent) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    // Validation
    if (!full_name || !age || !address || !level || !phone_number || !joined_date || !expected_graduation_date) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    if (level !== 'master' && level !== 'bachelor') {
      return res.status(400).json({
        success: false,
        message: 'Level must be either "master" or "bachelor"'
      });
    }

    const updateStmt = db.prepare(`
      UPDATE students
      SET full_name = ?,
          age = ?,
          address = ?,
          level = ?,
          phone_number = ?,
          joined_date = ?,
          expected_graduation_date = ?,
          updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    updateStmt.run(
      full_name,
      age,
      address,
      level,
      phone_number,
      joined_date,
      expected_graduation_date,
      id
    );

    res.status(200).json({
      success: true,
      message: 'Student updated successfully',
      data: {
        id,
        full_name,
        age,
        address,
        level,
        phone_number,
        joined_date,
        expected_graduation_date
      }
    });
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// DELETE - Delete a student by ID
app.delete('/api/students/:id', (req, res) => {
  try {
    const { id } = req.params;

    // Check if student exists
    const checkStmt = db.prepare('SELECT * FROM students WHERE id = ?');
    const existingStudent = checkStmt.get(id);

    if (!existingStudent) {
      return res.status(404).json({
        success: false,
        message: 'Student not found'
      });
    }

    const deleteStmt = db.prepare('DELETE FROM students WHERE id = ?');
    deleteStmt.run(id);

    res.status(200).json({
      success: true,
      message: 'Student deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoints available at http://localhost:${PORT}/api/students`);
});
