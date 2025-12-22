const [student1, student2] = ['Kunga', 'Ritik']
console.log(student1); //output = Kunga

const student = {
    name: 'Kunga',
    age: '26',
    grade: 'A',
    city: 'New York'
};

const { name, age } = student
console.log(age);

//array
const fruits = ['apple', 'mango'];
const vegetables = ['carrot', 'potato'];
const food = [...fruits, ...vegetables];
console.log(food);


//object - replace the value as keys are unique
const defaults = { theme: 'light', fontSize: 14, lang: 'en' };
const userSettings = { theme: 'dark', fontSize: 16 };
const finalSetting = { ...defaults, ...userSettings };
console.log(finalSetting);


//Rest Operator
function introduce(greetings, ...names) {
    return `${greetings} ${names.join(', ')}!`;
}
console.log(introduce('Hi', 'Kunga', 'Rapxang', 'John'));



//FETCH



