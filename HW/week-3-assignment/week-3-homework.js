
/*
Kunga Nyima Gurung
Ch.3 — Class Exercise (Node.js Worksheet) — QUESTIONS ONLY
Run later with: node homework.js

INSTRUCTIONS:
- In your working copy, answer each question in order.
- Use console.log to show your results when you implement.
*/

let students = [
  { id: 101, firstName: 'Aisha',  lastName: 'Joe',   course: 'msin' },
  { id: 102, firstName: 'Marco',  lastName: 'Silva',  course: 'msin' },
  { id: 103, firstName: 'Linda',   lastName: 'Smith',   course: 'mdd'  }, // the one different
  { id: 104, firstName: 'Emily',  lastName: 'Brown',  course: 'msin' }
];

/*
Q1) Classic for loop
Loop over students and print: firstName, lastName, course (one line per student).
*/

for (let i = 0; i < students.length; i++) {
  console.log(`${students[i].firstName} ${students[i].lastName} ${students[i].course}`);
}


/*
Q2) for...of loop
Loop over students and print: firstName, lastName, course (one line per student).
*/

for (const student of students) {
  console.log(`${student.firstName} ${student.lastName} ${student.course}`);
}

/*
Q3) while loop (filter during loop)
Print ONLY those students whose course is 'msin'. Ignore the rest.
*/
let i = 0;
while (i < students.length) {
  if (students[i].course === 'msin') {
    console.log(`${students[i].firstName} ${students[i].lastName} ${students[i].course}`);
  }
  i++;
}


/*
Q4) Print by index
Pick any index number.
- If it’s valid, print that student’s firstName, lastName, course.
- If it’s out of range, print a friendly message.
*/

let index = 3;

if (index >= 0 && index < students.length) {
  const student = students[index];
  console.log(`${student.firstName} ${student.lastName} ${student.course}`);
} else {
  console.log(`Oops! Index ${index} is out of range. Please pick a number between 0 and ${students.length - 1}.`);
}


/*
Q5) Add a new student
Add one new student object to the array (id, firstName, lastName, course).
Then print the new total number of students.
*/
// Adding a new student
students.push({ id: 105, firstName: 'Kunga', lastName: 'Gurung', course: 'mdd' });

// Printing the new total number of students
console.log(students)
console.log(`Total students now: ${students.length}`);



/*
Q6) Remove a student
Remove one student from the array (any reasonable approach).
Then print which student was removed and the new total.
*/
// Removing a student
const removedStudent = students.pop(); // removes last student

console.log(`Removed student: ${removedStudent.firstName} ${removedStudent.lastName} ${removedStudent.course}`);
console.log(`Total students now: ${students.length}`);

/*
Q7) If / Else If / Else — Discount tiers (more interesting than grades)
Create a numeric variable orderTotal (e.g., a shopping cart total).
Print the discount label:
- 'Gold 20%'  for totals >= 100
- 'Silver 10%' for totals >= 50
- 'Bronze 5%'  for totals >= 25
- 'No discount' otherwise
*/

let orderTotal = 75;

if (orderTotal >= 100) {
  console.log('Gold 20%');
} else if (orderTotal >= 50) {
  console.log('Silver 10%');
} else if (orderTotal >= 25) {
  console.log('Bronze 5%');
} else {
  console.log('No discount');
}


/*
Q8) Ternary — Free shipping message (single-line choice)
Given an orderTotal, create:
print the message if order is >= 100 → 'Free shipping' otherwise → 'Shipping cost: $5'
*/
let orderTotal2 = 85; // <-- you can change this value

console.log(orderTotal2 >= 100 ? 'Free shipping' : 'Shipping cost: $5');


/*
Q9) Switch — Subscription plan to permissions 
Create a variable plan with one of: 'free' | 'pro' | 'team' | 'enterprise'.
Using switch, print permissions:
- 'free'        → 'Basic features'
- 'pro'         → 'Pro features + priority support'
- 'team'        → 'Team features + shared projects'
- 'enterprise'  → 'All features + dedicated support'
- default       → 'Unknown plan'
*/

let plan = 'pro';

switch (plan) {
  case 'free':
    console.log('Basic features');
    break;
  case 'pro':
    console.log('Pro features + priority support');
    break;
  case 'team':
    console.log('Team features + shared projects');
    break;
  case 'enterprise':
    console.log('All features + dedicated support');
    break;
  default:
    console.log('Unknown plan');
}


/*
Q10) Build a filtered list
create a new array of name and check if name is start with A or B then print it.
hint: const name = ['John', add more names here];
*/
// Q10) Build a filtered list
const names = ['Kunga', 'Alice', 'Bob', 'Anna', 'Ritik', 'Brian'];

const filteredNames = names.filter(n => n.startsWith('A') || n.startsWith('B'));

console.log('Names starting with A or B:', filteredNames);


