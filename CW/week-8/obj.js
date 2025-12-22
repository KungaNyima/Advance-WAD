//Key Value access

const product = {
    id: 'P001',
    name: 'Laptop',
    price: 1299,
    inStock: true,
    category: 'Electronics'
};

for (let [k, v] of Object.entries(product)) {
    if (k === 'inStock' && v === true) {
        console.log("Product is in the Stock")
    }
}


//Map
const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'Bob', lastName: 'Johnson' }
];

const fullnames = users.map(obj => ({
    fullname: `${obj.firstName} ${obj.lastName}`
}));

console.log(fullnames);



// Filtering objects
const products = [
  { name: 'Laptop', price: 1200, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 75, inStock: true },
  { name: 'Monitor', price: 300, inStock: true },
  { name: 'Webcam', price: 80, inStock: false }
];

const availableProducts = products.filter(obj => obj.inStock === true);
console.log("\nAvailable Products:");
console.log(availableProducts);

//traditional way
console.log('\nTraditional way output')
for (let prod of availableProducts) {
  console.log(prod.name);
}

// foreach
console.log('\nForeach way output')
availableProducts.forEach((obj, i) => {
  console.log(obj.name);
});




// Counting occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((count, fruit) => {
  count[fruit] = (count[fruit] || 0) + 1;
  return count;
}, {});
console.log("\nFruit Count:", fruitCount);

const fruitC=fruits.reduce((count,fruit)=>{
    count [fruit]=(count[fruit] || 0)+1
    return count
});



// Example: array of student objects with score arrays
const studentMS = [
  { name: 'Ava', sub: 'ms', scores: [88, 92, 79, 85] },
  { name: 'Liam', sub: 'bs', scores: [95, 90, 93, 89] },
  { name: 'Mia', sub: 'ms', scores: [72, 81, 77, 69] },
  { name: 'Noah', sub: 'bs', scores: [84, 80, 86, 88] },
  { name: 'Zoe', sub: 'ms', scores: [91, 94, 89, 96] }
];

//TODO
const students= studentMS.filter(obj =>obj.sub === 'ms')
.map(msStudent =>{
    totalScore=msStudent.scores.reduce((a,b)=>a+b,0)
    return{
        name:msStudent.name,
        totalScore: totalScore
    }
})
console.log(students)


//by creating array
let top_student = {};      // to store the highest scoring student
let student_score = 0;     // to store the highest score

students.forEach(obj => {
    if (obj.totalScore > student_score) {   // condition
        student_score = obj.totalScore;     // update highest score
        top_student = obj;                  // store the whole object
    }
});

console.log(student_score);  // highest score
console.log(top_student);    // student who has highest score



//foreach
let highScore = 0;
students.forEach(obj => {
  if (obj.totalScore > highScore) {
    highScore = obj.totalScore;
  }
});

console.log(highScore);

