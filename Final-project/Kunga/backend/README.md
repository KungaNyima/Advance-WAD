# Student Management System API

Simple REST API for managing student records with Node.js, Express, and SQLite.

## Quick Start

```bash
npm install
npm start
```

Server runs on `http://localhost:3000`

---

## API Endpoints

### 1. CREATE - Create a New Student

**Endpoint:** `POST /api/students`

**Description:** Creates a new student record in the database.

**Request Body Required:** Yes

**Request Body Structure:**
```json
{
  "full_name": "John Doe",
  "age": 22,
  "address": "123 Main St, New York, NY",
  "level": "bachelor",
  "phone_number": "+1234567890",
  "joined_date": "2024-01-15",
  "expected_graduation_date": "2027-05-20"
}
```

**Field Requirements:**
- `full_name` - String, required
- `age` - Number, required
- `address` - String, required
- `level` - String, required (must be "bachelor" or "master")
- `phone_number` - String, required
- `joined_date` - String, required (format: YYYY-MM-DD)
- `expected_graduation_date` - String, required (format: YYYY-MM-DD)

**Expected Response (Success - 201):**
```json
{
  "success": true,
  "message": "Student created successfully",
  "data": {
    "id": 1,
    "full_name": "John Doe",
    "age": 22,
    "address": "123 Main St, New York, NY",
    "level": "bachelor",
    "phone_number": "+1234567890",
    "joined_date": "2024-01-15",
    "expected_graduation_date": "2027-05-20"
  }
}
```

**Expected Response (Error - 400):**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

**Expected Response (Error - 400):**
```json
{
  "success": false,
  "message": "Level must be either \"master\" or \"bachelor\""
}
```

---

### 2. READ - Get All Students

**Endpoint:** `GET /api/students`

**Description:** Retrieves all student records from the database.

**Request Body Required:** No

**Expected Response (Success - 200):**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "full_name": "John Doe",
      "age": 22,
      "address": "123 Main St, New York, NY",
      "level": "bachelor",
      "phone_number": "+1234567890",
      "joined_date": "2024-01-15",
      "expected_graduation_date": "2027-05-20",
      "created_at": "2024-01-15 10:30:00",
      "updated_at": "2024-01-15 10:30:00"
    },
    {
      "id": 2,
      "full_name": "Jane Smith",
      "age": 24,
      "address": "456 Oak Ave, Boston, MA",
      "level": "master",
      "phone_number": "+1987654321",
      "joined_date": "2024-02-01",
      "expected_graduation_date": "2026-05-20",
      "created_at": "2024-02-01 14:20:00",
      "updated_at": "2024-02-01 14:20:00"
    }
  ]
}
```

**Expected Response (Empty - 200):**
```json
{
  "success": true,
  "count": 0,
  "data": []
}
```

---

### 3. READ - Get Student by ID

**Endpoint:** `GET /api/students/:id`

**Description:** Retrieves a specific student record by their ID.

**Request Body Required:** No

**URL Parameters:**
- `id` - Student ID (integer)

**Example:** `GET /api/students/1`

**Expected Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "full_name": "John Doe",
    "age": 22,
    "address": "123 Main St, New York, NY",
    "level": "bachelor",
    "phone_number": "+1234567890",
    "joined_date": "2024-01-15",
    "expected_graduation_date": "2027-05-20",
    "created_at": "2024-01-15 10:30:00",
    "updated_at": "2024-01-15 10:30:00"
  }
}
```

**Expected Response (Error - 404):**
```json
{
  "success": false,
  "message": "Student not found"
}
```

---

### 4. UPDATE - Update Student by ID

**Endpoint:** `PUT /api/students/:id`

**Description:** Updates an existing student record by their ID.

**Request Body Required:** Yes

**URL Parameters:**
- `id` - Student ID (integer)

**Example:** `PUT /api/students/1`

**Request Body Structure:**
```json
{
  "full_name": "John Doe Updated",
  "age": 23,
  "address": "789 Elm Street, New York, NY",
  "level": "master",
  "phone_number": "+1234567890",
  "joined_date": "2024-01-15",
  "expected_graduation_date": "2026-05-20"
}
```

**Field Requirements:**
- All fields are required (same as CREATE endpoint)
- `level` must be "bachelor" or "master"

**Expected Response (Success - 200):**
```json
{
  "success": true,
  "message": "Student updated successfully",
  "data": {
    "id": "1",
    "full_name": "John Doe Updated",
    "age": 23,
    "address": "789 Elm Street, New York, NY",
    "level": "master",
    "phone_number": "+1234567890",
    "joined_date": "2024-01-15",
    "expected_graduation_date": "2026-05-20"
  }
}
```

**Expected Response (Error - 404):**
```json
{
  "success": false,
  "message": "Student not found"
}
```

**Expected Response (Error - 400):**
```json
{
  "success": false,
  "message": "All fields are required"
}
```

---

### 5. DELETE - Delete Student by ID

**Endpoint:** `DELETE /api/students/:id`

**Description:** Deletes a student record from the database by their ID.

**Request Body Required:** No

**URL Parameters:**
- `id` - Student ID (integer)

**Example:** `DELETE /api/students/1`

**Expected Response (Success - 200):**
```json
{
  "success": true,
  "message": "Student deleted successfully"
}
```

**Expected Response (Error - 404):**
```json
{
  "success": false,
  "message": "Student not found"
}
```

---

## Testing Examples

### Using cURL

**Create a student:**
```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Jane Smith",
    "age": 24,
    "address": "456 Oak Ave, Boston, MA",
    "level": "master",
    "phone_number": "+1987654321",
    "joined_date": "2024-02-01",
    "expected_graduation_date": "2026-05-20"
  }'
```

**Get all students:**
```bash
curl http://localhost:3000/api/students
```

**Get student by ID:**
```bash
curl http://localhost:3000/api/students/1
```

**Update a student:**
```bash
curl -X PUT http://localhost:3000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{
    "full_name": "Jane Smith Updated",
    "age": 25,
    "address": "456 Oak Ave, Boston, MA",
    "level": "master",
    "phone_number": "+1987654321",
    "joined_date": "2024-02-01",
    "expected_graduation_date": "2026-05-20"
  }'
```

**Delete a student:**
```bash
curl -X DELETE http://localhost:3000/api/students/1
```

---

## Technical Details

**Database:** SQLite (students.db)
**CORS:** Enabled for all origins
**Port:** 3000 (configurable via PORT environment variable)

**Database Schema:**
- id (Primary Key, Auto-increment)
- full_name (TEXT)
- age (INTEGER)
- address (TEXT)
- level (TEXT - 'bachelor' or 'master')
- phone_number (TEXT)
- joined_date (TEXT)
- expected_graduation_date (TEXT)
- created_at (DATETIME)
- updated_at (DATETIME)
