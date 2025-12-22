const Database = require('better-sqlite3');
const path = require('path');

// Initialize database
const db = new Database(path.join(__dirname, 'students.db'));

// Create students table if it doesn't exist
const createTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      age INTEGER NOT NULL,
      address TEXT NOT NULL,
      level TEXT NOT NULL CHECK(level IN ('master', 'bachelor')),
      phone_number TEXT NOT NULL,
      joined_date TEXT NOT NULL,
      expected_graduation_date TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.exec(sql);
  console.log('Database initialized successfully');
};

// Initialize the database table
createTable();

module.exports = db;
