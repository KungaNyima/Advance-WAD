// Kunga Nyima

// 1. Function Declaration
function StudentDeclaration(name, age, course) {
  return { name: name, age: age, course: course };
}

// 2. Function Expression
const StudentExpression = function(name, age, course) {
  return { name: name, age: age, course: course };
};

// 3. Arrow Function
const StudentArrow = (name, age, course) => {
  return { name: name, age: age, course: course };
};

// Example calls (uncomment to test in Node):
console.log(StudentDeclaration('Kunga', 26, 'Web Warriors'));
console.log(StudentExpression('Ritik', 25, 'Web Warriors'));
console.log(StudentArrow('Silvia', 24, 'Web Warriors'));
