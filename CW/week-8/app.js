

// Basic object with key-value pairs
const user = {
  name: 'Alex',
  age: 25,
  email: 'alex@example.com',
  city: 'New York'
};

// Accessing properties - dot notation
console.log("User Name (dot notation):", user.name);

// Accessing properties - bracket notation
console.log("User Age (bracket notation):", user['age']);

// Dynamic property access
const property = 'email';
console.log("Dynamic access:", user[property]);

// Complex nested object
const employee = {
  id: 101,
  name: 'Sarah',
  department: {
    name: 'Engineering',
    location: 'Building A'
  },
  skills: ['JavaScript', 'React', 'Node.js']
};

console.log("Employee Department:", employee.department.name);
console.log("First Skill:", employee.skills[0]);
console.log();



// ============================================================
// SLIDE 4: Working with Objects
// ============================================================
console.log("--- SLIDE 4: Working with Objects ---");

const product = {
  id: 'P001',
  name: 'Laptop',
  price: 1299,
  inStock: true,
  category: 'Electronics'
};

// Object.keys() - returns all keys
console.log("Product Keys:", Object.keys(product));

// Object.values() - returns all values
console.log("Product Values:", Object.values(product));

// Object.entries() - returns key-value pairs
console.log("Product Entries:", Object.entries(product));


for (let [key, value] of Object.entries(product)) {
  console.log(`  ${key}: ${value}`);
}


// ============================================================
// SLIDE 5: Array.map()
// ============================================================
console.log("--- SLIDE 5: Array.map() ---");

// Basic example - doubling numbers
const nums = [1, 2, 3, 4, 5];
const doubled = nums.map(n => n * 2);
console.log("Original:", nums);
console.log("Doubled:", doubled);

// Transforming objects
const users = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Johnson' }
];
// hint template ${user.firstName} ${user.lastName}`
//Todo

// ============================================================
// SLIDE 6: Array.filter()
// ============================================================
console.log("--- SLIDE 6: Array.filter() ---");

// Basic example - filtering passing scores
const scores = [85, 42, 90, 55, 73, 38, 92];
const passed = scores.filter(s => s >= 60);
console.log("All Scores:", scores);
console.log("Passing Scores (>=60):", passed);

// Filtering objects
const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 300, inStock: true },
  { name: 'Webcam', price: 80, inStock: false }
];
//TODO
//const availableProducts = products.filter();
//console.log("\nAvailable Products:");
//availableProducts.forEach();



// Filtering by even number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//todo
//const evenNumbers = 







// Basic example - sum
const values = [1, 2, 3, 4, 5];
const sumTotal = values.reduce((total, num) => total + num, 0);
console.log("Numbers:", values);
console.log("Sum:", sumTotal);

// Average calculation
const grades = [85, 90, 78, 92, 88];
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("\nGrades:", grades);
console.log("Average:", average.toFixed(2));

// Shopping cart total
const cart = [
  { item: 'Book', price: 15.99, quantity: 2 },
  { item: 'Pen', price: 2.50, quantity: 5 },
  { item: 'Notebook', price: 5.99, quantity: 3 }
];

const cartTotal = cart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);

console.log("\nShopping Cart:");
cart.forEach(item => console.log(`  ${item.item} x${item.quantity}: $${(item.price * item.quantity).toFixed(2)}`));
console.log("Total:", `$${cartTotal.toFixed(2)}`);

// Counting occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log("\nFruit Count:", fruitCount);


// Basic chaining example
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numbers2
  .filter(n => n > 2)        // [3,4,5,6,7,8,9,10]
  .map(n => n * 10)          // [30,40,50,60,70,80,90,100]
  .reduce((a, b) => a + b);  // 520

console.log("Original:", numbers2);
console.log("After filter(>2), map(*10), reduce(sum):", result);

// Real-world example: Processing student data
const students = [
  { name: 'Alice', score: 85, attendance: 95 },
  { name: 'Bob', score: 45, attendance: 70 },
  { name: 'Charlie', score: 92, attendance: 88 },
  { name: 'David', score: 55, attendance: 65 },
  { name: 'Eve', score: 88, attendance: 92 }
];

const topStudentsAverage = students
  .filter(s => s.score >= 60)                    // Keep passing students
  .filter(s => s.attendance >= 80)               // Keep good attendance
  .map(s => s.score)                             // Extract scores
  .reduce((sum, score, _, arr) => {              // Calculate average
    return sum + score / arr.length;
  }, 0);

console.log("\nTop Students (score>=60, attendance>=80) Average:", topStudentsAverage.toFixed(2));

// E-commerce example: Processing orders
const orders = [
  { id: 1, total: 150, status: 'completed' },
  { id: 2, total: 75, status: 'pending' },
  { id: 3, total: 220, status: 'completed' },
  { id: 4, total: 50, status: 'cancelled' },
  { id: 5, total: 180, status: 'completed' }
];

const completedRevenue = orders
  .filter(order => order.status === 'completed')  // Only completed orders
  .map(order => order.total)                      // Get totals
  .reduce((total, amount) => total + amount, 0);  // Sum them up

console.log("\nCompleted Orders Revenue:", `$${completedRevenue}`);
console.log();


// Example: array of student objects with score arrays
const studentMS = [
  { name: 'Ava', sub: 'ms', scores: [88, 92, 79, 85] },
  { name: 'Liam', sub: 'bs', scores: [95, 90, 93, 89] },
  { name: 'Mia', sub: 'ms', scores: [72, 81, 77, 69] },
  { name: 'Noah', sub: 'bs', scores: [84, 80, 86, 88] },
  { name: 'Zoe', sub: 'ms', scores: [91, 94, 89, 96] }
];

console.log("Student Score Data:", students);
//TODO




// Array destructuring
const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log("Array [10, 20, 30] destructured:");
console.log(`  x = ${x}, y = ${y}, z = ${z}`);

// Skipping elements
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, , tertiary] = colors;
console.log(`\nFirst and third: ${primary}, ${tertiary}`);

// Rest in array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first, "Second:", second, "Rest:", rest);

// Object destructuring
const person = {
  name: 'Alex',
  age: 25,
  city: 'Boston',
  country: 'USA'
};

const { name, age } = person;
console.log(`\nObject destructured: ${name}, ${age}`);

// Renaming variables
const { name: userName, age: userAge } = person;
console.log(`Renamed: ${userName} is ${userAge} years old`);


// Nested destructuring
const company = {
  name: 'TechCorp',
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    zip: '94102'
  },
  employees: 150
};

const { name: companyName, address: { city: companyCity, zip } } = company;
console.log(`\nNested: ${companyName} in ${companyCity}, ZIP: ${zip}`);



// Spread with arrays - combining arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Combined:", combined);

// Spread - copying arrays
const original = [10, 20, 30];
const copy = [...original];
copy.push(40);
console.log("\nOriginal:", original);
console.log("Copy (modified):", copy);

// Spread with objects
const basicInfo = { name: 'John', age: 30 };
const contactInfo = { email: 'john@example.com', phone: '555-1234' };
const fullInfo = { ...basicInfo, ...contactInfo };
console.log("\nFull Info:", fullInfo);

// Spread - updating object properties
const userProfile = { name: 'Alice', age: 25, city: 'NYC' };
const updatedProfile = { ...userProfile, age: 26, country: 'USA' };
console.log("Original Profile:", userProfile);
console.log("Updated Profile:", updatedProfile);

// Rest operator in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("\nSum(1,2,3):", sum(1, 2, 3));
console.log("Sum(5,10,15,20):", sum(5, 10, 15, 20));
console.log("Sum(100):", sum(100));

// Rest with destructuring
function greet(greeting, ...names) {
  return `${greeting} ${names.join(', ')}!`;
}

console.log("\n" + greet("Hello", "Alice", "Bob", "Charlie"));

// Practical example: Merging configurations
const defaultConfig = {
  theme: 'light',
  fontSize: 14,
  notifications: true,
  autoSave: true
};

const userConfig = {
  theme: 'dark',
  fontSize: 16
};

const finalConfig = { ...defaultConfig, ...userConfig };
console.log("\nFinal Configuration:", finalConfig);
console.log();


//create product

const product1 = {
  name: 'iphone',
  aku: 'iphone-1234',
  price: '980.00'
}
console.log(product1.name);



