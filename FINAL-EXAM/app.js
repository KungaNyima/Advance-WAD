/*
   MSIN-625

   INSTRUCTIONS:
   1. Implement all 11 functions below
   2. DO NOT modify the test functions (testQuestion1, testQuestion2, etc.)
   3. DO NOT modify index.html or styles.css
   4. Test each function by clicking the buttons in the browser
   5. Questions 1-6 can also be tested by running: node app.js
   6. All functions must work correctly to pass the exam

   TIME: 1.5 hrs
   TOTAL POINTS: 100
*/

// QUESTION 1: Grade Calculator (IF/ELSE) - 9 Points
/**
 * Write a function that returns a letter grade based on score
 * 90-100: 'A', 80-89: 'B', 70-79: 'C', 60-69: 'D', Below 60: 'F'
 * @param {number} score - A number between 0 and 100
 * @returns {string} - Letter grade ('A', 'B', 'C', 'D', or 'F')
 */
function calculateGrade(score) {
  // YOUR CODE HERE
  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else {
    return 'F';
  } 
}

// Test function (DO NOT MODIFY)
function testQuestion1() {
  const score = parseInt(document.getElementById("q1-score").value);
  const result = calculateGrade(score);
  document.getElementById(
    "q1-result"
  ).textContent = `Score: ${score} → Grade: ${result}`;
}

// QUESTION 2: Day Name (SWITCH CASE) - 9 Points
/**
 * Write a function using SWITCH that returns day name
 * 1=Monday, 2=Tuesday, 3=Wednesday, 4=Thursday, 5=Friday, 6=Saturday, 7=Sunday
 * Return "Invalid day" for numbers outside 1-7
 * @param {number} dayNumber - A number between 1 and 7
 * @returns {string} - Name of the day or "Invalid day"
 */
function getDayName(dayNumber) {
  // YOUR CODE HERE - MUST USE SWITCH STATEMENT
  switch (dayNumber) {
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    case 7:
      return 'Sunday';
    default:
      return 'Invalid day';
  } 
}

// Test function (DO NOT MODIFY)
function testQuestion2() {
  const day = parseInt(document.getElementById("q2-day").value);
  const result = getDayName(day);
  document.getElementById("q2-result").textContent = `Day ${day}: ${result}`;
}

// QUESTION 3: Filter Adults (ARRAY FILTER) - 9 Points
/**
 * Write a function that filters an array and returns only ages >= 18
 * MUST use the filter() method
 * @param {number[]} ages - Array of ages
 * @returns {number[]} - Array of ages 18 and above
 */
function filterAdults(ages) {
  // YOUR CODE HERE - MUST USE .filter() METHOD
  return ages.filter(age => age >= 18);   
}

// Test function (DO NOT MODIFY)
function testQuestion3() {
  const ages = [12, 18, 25, 15, 30, 16, 21];
  const result = filterAdults(ages);
  document.getElementById(
    "q3-result"
  ).textContent = `Original: [${ages}] → Adults: [${result}]`;
}

// QUESTION 4: Double Numbers (ARRAY MAP) - 9 Points
/**
 * Write a function that doubles each number in an array
 * MUST use the map() method
 * @param {number[]} numbers - Array of numbers
 * @returns {number[]} - Array with each number doubled
 */
function doubleNumbers(numbers) {
  // YOUR CODE HERE - MUST USE .map() METHOD
  return numbers.map(number => number * 2);
}

// Test function (DO NOT MODIFY)
function testQuestion4() {
  const numbers = [1, 2, 3, 4, 5];
  const result = doubleNumbers(numbers);
  document.getElementById(
    "q4-result"
  ).textContent = `Original: [${numbers}] → Doubled: [${result}]`;
}

// QUESTION 5: Reverse String (STRING METHODS) - 9 Points
/**
 * Write a function that reverses a string
 * Hint: Use split(), reverse(), and join()
 * @param {string} str - Input string
 * @returns {string} - Reversed string
 */
function reverseString(str) {
  // YOUR CODE HERE - USE STRING METHODS
  return str.split('').reverse().join(''); 
}

// Test function (DO NOT MODIFY)
function testQuestion5() {
  const str = document.getElementById("q5-string").value;
  const result = reverseString(str);
  document.getElementById("q5-result").textContent = `"${str}" → "${result}"`;
}

// QUESTION 6: Calculator Function (FUNCTIONS) - 9 Points
/**
 * Write a function that performs basic arithmetic operations
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} operation - One of: '+', '-', '*', '/'
 * @returns {number} - Result of the operation
 */
function calculate(num1, num2, operation) {
  // YOUR CODE HERE - USE IF/ELSE OR SWITCH
switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? num1 / num2 : 'Error: Division by zero is not possible';
    default:
      return 'Error: Invalid operation';
  } 
} 

// Test function (DO NOT MODIFY)
function testQuestion6() {
  const num1 = parseFloat(document.getElementById("q6-num1").value);
  const num2 = parseFloat(document.getElementById("q6-num2").value);
  const operation = document.getElementById("q6-operation").value;
  const result = calculate(num1, num2, operation);
  document.getElementById(
    "q6-result"
  ).textContent = `${num1} ${operation} ${num2} = ${result}`;
}

// QUESTION 7: Sum with Reduce (ARRAY REDUCE) - 9 Points
/**
 * Write a function that sums all numbers in an array using reduce()
 * MUST use the reduce() method
 * @param {number[]} numbers - Array of numbers
 * @returns {number} - Sum of all numbers
 */
function sumNumbers(numbers) {
  // YOUR CODE HERE - MUST USE .reduce() METHOD
  return numbers.reduce((totalValue, currentValue) => totalValue + currentValue, 0);  
}

// Test function (DO NOT MODIFY)
function testQuestion7() {
  const numbers = [10, 20, 30, 40, 50];
  const result = sumNumbers(numbers);
  document.getElementById(
    "q7-result"
  ).textContent = `Array: [${numbers}] → Sum: ${result}`;
}

// QUESTION 8: Find Adult (ARRAY FIND) - 9 Points
/**
 * Write a function that finds the FIRST person who is 18 or older
 * MUST use the find() method
 * @param {Object[]} people - Array of person objects with 'name' and 'age'
 * @returns {Object|undefined} - First adult person object or undefined
 */
function findFirstAdult(people) {
  // YOUR CODE HERE - MUST USE .find() METHOD
  return people.find(selectedPerson => selectedPerson.age >= 18); 
}

// Test function (DO NOT MODIFY)
function testQuestion8() {
  const people = [
    { name: "Alice", age: 15 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 17 },
    { name: "David", age: 19 },
  ];
  const result = findFirstAdult(people);
  document.getElementById("q8-result").textContent = result
    ? `First adult: ${result.name}, Age: ${result.age}`
    : "No adult found";
}

// QUESTION 9: Create Student Object (OBJECT METHODS) - 9 Points
/**
 * Write a function that creates and returns a student object
 * The object should have: name, age, grade, and a method 'getInfo()'
 * getInfo() should return: "Name: [name], Age: [age], Grade: [grade]"
 * @param {string} name - Student name
 * @param {number} age - Student age
 * @param {string} grade - Student grade
 * @returns {Object} - Student object with getInfo method
 */
function createStudent(name, age, grade) {
  // YOUR CODE HERE - CREATE OBJECT WITH METHOD
  return {
    name: name,
    age: age,
    grade: grade,
    getInfo() {
      return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
  };    
}

// Test function (DO NOT MODIFY)
function testQuestion9() {
  const name = document.getElementById("q9-name").value;
  const age = parseInt(document.getElementById("q9-age").value);
  const grade = document.getElementById("q9-grade").value;
  const student = createStudent(name, age, grade);
  document.getElementById("q9-result").textContent = student.getInfo();
}

// QUESTION 10: Fetch User Data (ASYNC/AWAIT & FETCH API) - 9 Points
/**
 * Write an async function that fetches user data from JSONPlaceholder API
 * Use async/await with fetch() to get user data
 * Return the user's email address
 * API: https://jsonplaceholder.typicode.com/users/1
 * @returns {Promise<string>} - User's email address
 */
async function fetchUserEmail() {
  // YOUR CODE HERE - USE ASYNC/AWAIT AND FETCH()
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  return data.email;    
}

// Test function (DO NOT MODIFY)
async function testQuestion10() {
  try {
    document.getElementById("q10-result").textContent = "Fetching...";
    const result = await fetchUserEmail();
    document.getElementById("q10-result").textContent = `Email: ${result}`;
  } catch (error) {
    document.getElementById(
      "q10-result"
    ).textContent = `Error: ${error.message}`;
  }
}

// QUESTION 11: Form Submission Handler (FORM & EVENT HANDLING) - 9 Points
/**
 * Write a function that handles form submission
 * 1. Prevent the default form submission behavior
 * 2. Get the values from name and email inputs
 * 3. Create a form data object with name and email properties
 * 4. Display the object in an alert (use JSON.stringify or template literal)
 * 5. Console.log the form data object
 * @param {Event} event - The form submit event
 */
function handleFormSubmit(event) {
  // YOUR CODE HERE - PREVENT DEFAULT, GET FORM DATA, ALERT AND CONSOLE.LOG
  event.preventDefault();
  const name = document.getElementById("q11-name").value;
  const email = document.getElementById("q11-email").value;

  const formData = {
    name: name,
    email: email
  };

  alert(`User Data:\nName: ${formData.name}\nEmail: ${formData.email}`);
  console.log(formData);  
}

// Setup function (DO NOT MODIFY)
function setupForm() {
  const form = document.getElementById("q11-form");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
}

// Initialize when page loads (DO NOT MODIFY)
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", setupForm);
}
