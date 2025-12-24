// Instructions: Complete each TODO below. Run the file to test your answers!

// Part 1: Working with Objects

const book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  year: 1925,
  pages: 180,
  genre: 'Fiction'
};
// TODO 1: Use Object.keys() to get all the keys from the book object
// Save it in a variable called bookKeys and print it


// TODO 2: Use Object.values() to get all the values from the book object
// Save it in a variable called bookValues and print it
const bookValues = Object.values(book);
console.log(bookValues);

// TODO 3: Use Object.entries() to get key-value pairs from the book object
// Then use a for...of loop to print each pair like "title: The Great Gatsby"
const entries = Object.entries(book);
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}



// Part 2: Array.map() - Transform your data

const temperatures = [32, 68, 86, 50, 77, 95, 41];

// TODO 4: Convert these Fahrenheit temperatures to Celsius using .map()
// Formula: (F - 32) × 5/9
// Save as celsiusTemps and print it
const celsiusTemps = temperatures.map(temp => (temp - 32) * 5/9);
console.log(celsiusTemps);


const employees = [
  { firstName: 'Emma', lastName: 'Wilson', salary: 50000 },
  { firstName: 'James', lastName: 'Brown', salary: 60000 },
  { firstName: 'Olivia', lastName: 'Davis', salary: 55000 }
];

// TODO 5: Use .map() to create an array of full names like "Emma Wilson"
// Save as fullNames and print it
const fullNames = employees.map(emp => `${emp.firstName} ${emp.lastName}`);
console.log(fullNames);


// TODO 6: Use .map() to give everyone a 10% raise
// Save the new salaries as raisedSalaries and print it
const raisedSalaries = employees.map(emp => emp.salary * 1.10);
console.log(raisedSalaries);


// Part 3: Array.filter() - Keep only what you need

const ages = [12, 18, 25, 14, 30, 16, 45, 19, 8, 21];

// TODO 7: Filter to get only ages 18 or older
// Save as adults and print it
const adults = ages.filter(age => age >= 18);
console.log(adults);


const movies = [
  { title: 'Inception', rating: 8.8, year: 2010 },
  { title: 'The Room', rating: 3.7, year: 2003 },
  { title: 'Parasite', rating: 8.6, year: 2019 },
  { title: 'Avatar', rating: 7.8, year: 2009 },
  { title: 'Interstellar', rating: 8.6, year: 2014 }
];

// TODO 8: Filter movies with rating 8.5 or higher
// Save as topRatedMovies and print it
const topRatedMovies = movies.filter(movie => movie.rating >= 8.5);
console.log(topRatedMovies);


// TODO 9: Filter movies released after 2010
// Save as recentMovies and print it
const recentMovies = movies.filter(movie => movie.year > 2010);
console.log(recentMovies);

// Part 4: Array.reduce() - Combine everything into one value

const expenses = [45.50, 123.75, 67.00, 89.25, 200.00];

// TODO 10: Use .reduce() to add up all the expenses
// Save as totalExpenses and print it
const totalExpenses = expenses.reduce((sum, expense) => sum + expense, 0);
console.log(totalExpenses);


const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];

// TODO 11: Use .reduce() to join all words into one sentence
// Hint: Start with an empty string and add each word with a space
// Save as sentence and print it
const sentence = words.reduce((acc, word) => acc + (acc ? ' ' : '') + word, '');
console.log(sentence);


const inventory = [
  { item: 'Laptop', quantity: 3, price: 999 },
  { item: 'Mouse', quantity: 10, price: 25 },
  { item: 'Keyboard', quantity: 5, price: 75 }
];

// TODO 12: Calculate the total value of inventory
// Multiply quantity × price for each item, then add them all up
// Save as totalValue and print it
const totalValue = inventory.reduce((sum, item) => sum + item.quantity * item.price, 0);
console.log(totalValue);


// Part 5: Method Chaining - Combine multiple array methods

const transactions = [
  { id: 1, amount: 150, type: 'income' },
  { id: 2, amount: 50, type: 'expense' },
  { id: 3, amount: 200, type: 'income' },
  { id: 4, amount: 75, type: 'expense' },
  { id: 5, amount: 300, type: 'income' },
  { id: 6, amount: 120, type: 'expense' }
];

// TODO 13: Chain .filter(), .map(), and .reduce() together to:
// Step 1: Filter only 'income' transactions
// Step 2: Map to get just the amounts
// Step 3: Reduce to add them all up
// Save as totalIncome and print it
const totalIncome = transactions
  .filter(tx => tx.type === 'income')   // Step 1: only income
  .map(tx => tx.amount)                 // Step 2: get amounts
  .reduce((sum, amount) => sum + amount, 0);  // Step 3: sum them

console.log(totalIncome);


// Part 6: Destructuring - Pull out values from objects and arrays

const studentInfo = {
  name: 'Michael Johnson',
  grade: 'A',
  age: 20,
  major: 'Computer Science',
  gpa: 3.8
};

// TODO 14: Use destructuring to pull out name, grade, and gpa
// Then print them
const { name, grade, gpa } = studentInfo;
console.log(name, grade, gpa);

const scores = [95, 87, 92, 78, 88];

// TODO 15: Use array destructuring to get the first and third scores
// Save as firstScore and thirdScore, then print them
const [firstScore, , thirdScore] = scores;
console.log(firstScore, thirdScore);


// Part 7: Spread Operator - Copy and combine arrays/objects

const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'spinach'];

// TODO 16: Use spread operator (...) to combine both arrays into one called food
// Print the food array
const food = [...fruits, ...vegetables];
console.log(food);


const originalProduct = {
  name: 'Phone',
  price: 699,
  brand: 'TechCo'
};

// TODO 17: Use spread to copy originalProduct but change price to 599
// and add a new property onSale: true
// Save as updatedProduct and print it
const updatedProduct = {
  ...originalProduct,
  price: 599,
  onSale: true
};

console.log(updatedProduct);


// Part 8: Rest Operator - Accept unlimited arguments

// TODO 18: Write a function called multiply that accepts any number of arguments
// Use rest operator (...numbers) to collect them
// Use .reduce() to multiply all numbers together
// Test it: multiply(2, 3, 4) should give you 24
function multiply(...numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Test
console.log(multiply(2, 3, 4)); // 24


// TODO 19: Write a function called getAverage that accepts any number of scores
// Calculate and return the average
// Test it: getAverage(85, 90, 92, 88) should give you 88.75
// TODO 19: Function to calculate average of any number of scores
function getAverage(...scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

// Test
console.log(getAverage(85, 90, 92, 88)); // 88.75


