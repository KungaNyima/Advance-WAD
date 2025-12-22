# Student Management System - Final Project Guide

## Introduction

Welcome to your final project! This document will guide you through building a complete **Student Management System** application.

You have been provided with a fully functional **backend REST API** built with Node.js, Express, and SQLite. Your task is to **create a frontend application** that integrates with this backend to provide a user-friendly interface for managing student records.

---

## What is This Application?

The **Student Management System (SMS)** is a web application designed to help educational institutions manage student information efficiently. The system allows administrators to:

- Add new student records
- View all students in the database
- Search and view individual student details
- Update existing student information
- Remove student records from the system

The application implements complete **CRUD (Create, Read, Update, Delete)** operations for managing student data.

---

## What You Need to Do

### Your Assignment

1. **Create a Frontend Application** using your preferred framework/technology:
   - Plain HTML/CSS/JavaScript
   - React.js (optional)


2. **Implement UI Components** for all CRUD operations:
   - A form to create new students
   - A list/table to display all students
   - A detail view to show individual student information
   - An edit form to update student records
   - A delete button/functionality to remove students

3. **Integrate with the Backend API** by making HTTP requests to the provided endpoints

4. **Design a User-Friendly Interface** that is:
   - Intuitive and easy to navigate
   - Responsive (works on different screen sizes)
   - Visually appealing
   - Handles errors gracefully

---

## Backend API Overview

The backend provides **5 main API endpoints** to manage student data:

### Available APIs

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/students` | Create a new student record |
| GET | `/api/students` | Get all students |
| GET | `/api/students/:id` | Get a specific student by ID |
| PUT | `/api/students/:id` | Update a student record |
| DELETE | `/api/students/:id` | Delete a student record |

### Student Data Structure

Each student record contains the following fields:

```javascript
{
  "id": 1,                              // Auto-generated
  "full_name": "John Doe",              // Required
  "age": 22,                            // Required
  "address": "123 Main St, NY",         // Required
  "level": "bachelor",                  // Required: "bachelor" or "master"
  "phone_number": "+1234567890",        // Required
  "joined_date": "2024-01-15",          // Required: YYYY-MM-DD format
  "expected_graduation_date": "2027-05-20", // Required: YYYY-MM-DD format
  "created_at": "2024-01-15 10:30:00",  // Auto-generated
  "updated_at": "2024-01-15 10:30:00"   // Auto-generated
}
```

---

## Installation & Setup

### Prerequisites

Before you start, make sure you have:

- **Node.js** installed (version 14 or higher)
- **npm** (comes with Node.js)
- A code editor (VS Code, Sublime, etc.)
- A web browser
- Basic knowledge of JavaScript and HTTP requests

### Step 1: Install Backend Dependencies

Navigate to the backend directory and install required packages:

```bash
cd backend
npm install
```

This will install:
- `express` - Web framework for Node.js
- `cors` - Enable Cross-Origin Resource Sharing
- `better-sqlite3` - SQLite database driver

### Step 2: Start the Backend Server

Run the server locally:

```bash
npm start
```

You should see:
```
Database initialized successfully
Server is running on port 3000
API endpoints available at http://localhost:3000/api/students
```

The backend server is now running at **http://localhost:3000**

### Step 3: Verify the Server is Running

Open your browser or use curl to test:

```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "Server is running"
}
```

---

## Detailed API Documentation

For complete API documentation including:
- Request/response examples
- Error handling
- Field validation rules
- cURL testing examples

**Please read the [README.md](README.md) file** in this directory.

The README contains:
- Detailed endpoint documentation
- Request body structures
- Success and error responses
- Testing examples with cURL
- Technical implementation details

---

## Frontend Implementation Guide

### Recommended Approach

1. **Start Simple**: Begin with basic HTML forms and JavaScript fetch requests
2. **Test Each Feature**: Test each CRUD operation individually before moving to the next
3. **Handle Errors**: Implement proper error handling and user feedback
4. **Enhance UI**: Add styling, validation, and user experience improvements
5. **Add Features**: Consider additional features like search, filtering, sorting

### Making API Requests

Here's how to make requests from your frontend:

#### Example: Fetch All Students (JavaScript)

```javascript
fetch('http://localhost:3000/api/students')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // data.data contains the array of students
    // Display students in your UI
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

#### Example: Create a New Student

```javascript
const studentData = {
  full_name: "Jane Doe",
  age: 23,
  address: "456 Oak St, Boston, MA",
  level: "bachelor",
  phone_number: "+1987654321",
  joined_date: "2024-03-01",
  expected_graduation_date: "2027-05-20"
};

fetch('http://localhost:3000/api/students', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(studentData)
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    // Show success message to user
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

#### Example: Delete a Student

```javascript
const studentId = 1;

fetch(`http://localhost:3000/api/students/${studentId}`, {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => {
    console.log('Deleted:', data);
    // Refresh the student list
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

---

## Project Requirements Checklist

Use this checklist to ensure you've completed all requirements:

- [ ] Backend server runs successfully
- [ ] Frontend application created
- [ ] **CREATE**: Form to add new students
- [ ] **READ**: Display list of all students
- [ ] **READ**: View individual student details
- [ ] **UPDATE**: Form to edit student information
- [ ] **DELETE**: Ability to remove students
- [ ] Form validation (all required fields)
- [ ] Error handling and user feedback
- [ ] Responsive design
- [ ] Clean and organized code
- [ ] Comments in code explaining functionality

---

## Tips for Success

1. **Read the README.md**: The technical documentation contains important details about request/response formats

2. **Test with cURL First**: Before implementing in your frontend, test the APIs using cURL or Postman to understand how they work

3. **Check the Console**: Use browser developer tools to debug API requests and responses

4. **Handle Validation**: The backend validates that `level` must be "bachelor" or "master" - ensure your frontend enforces this

5. **Date Format**: Dates must be in YYYY-MM-DD format

6. **CORS is Enabled**: The backend has CORS enabled, so you can make requests from any origin

7. **Start with GET**: Begin by displaying the list of students before implementing create/update/delete

8. **Use Async/Await**: Consider using async/await instead of .then() for cleaner code:

```javascript
async function getStudents() {
  try {
    const response = await fetch('http://localhost:3000/api/students');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

---

## Project Structure

```
backend/
├── README.md              # Technical API documentation (READ THIS!)
├── STUDENT_GUIDE.md       # This file - your project guide
├── package.json           # Dependencies and scripts
├── index.js               # Main server file with API endpoints
├── database.js            # Database configuration
├── students.db            # SQLite database file
└── node_modules/          # Installed dependencies
```

---

## Common Issues & Solutions

### Issue: Cannot connect to backend
**Solution**: Make sure the backend server is running (`npm start`)

### Issue: CORS errors
**Solution**: The backend already has CORS enabled. If you still see errors, check if you're using the correct URL (http://localhost:3000)

### Issue: "All fields are required" error
**Solution**: Ensure you're sending all required fields in your request body

### Issue: "Student not found" error
**Solution**: Verify the student ID exists in the database

### Issue: "Level must be either 'master' or 'bachelor'" error
**Solution**: Check the value of the `level` field in your request - it must be exactly "master" or "bachelor" (lowercase)

---

## Additional Resources

- **Express.js Documentation**: https://expressjs.com/
- **Fetch API (MDN)**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **SQLite Documentation**: https://www.sqlite.org/docs.html
- **REST API Best Practices**: https://restfulapi.net/

---

## Getting Help

If you encounter issues:

1. Check the console for error messages
2. Review the [README.md](README.md) for API details
3. Test the API endpoints with cURL to isolate frontend vs backend issues
4. Verify all required fields are included in your requests
5. Check that the backend server is running

---

## Evaluation Criteria

Your project will be evaluated on:

- **Functionality**: All CRUD operations work correctly
- **Code Quality**: Clean, organized, well-commented code
- **User Interface**: Professional, intuitive design
- **Error Handling**: Proper handling of errors and edge cases
- **Integration**: Successful communication with backend API
- **Documentation**: Clear README for your frontend project

---

## Next Steps

1. Read the [README.md](README.md) file thoroughly
2. Install and start the backend server
3. Test the API endpoints using cURL or Postman
4. Plan your frontend application structure
5. Start coding! Begin with displaying the list of students
6. Implement each CRUD operation one at a time
7. Add styling and polish
8. Test thoroughly
9. Submit your completed project

---

**Good luck with your project!** Remember, building a full-stack application takes time. Start early, test frequently, and don't hesitate to ask for help when needed.