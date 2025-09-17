let students =["Nyima","Ritik","Silvia"];
console.log(students);
console.log(students.length);//checking the length of student
students.push("John"); //adding new student
console.log(students);
students[students.length-1]="Jane"; //john left and jane added
console.log(students);
console.log(students[(students.length)/2-1]);


students.pop(); //dropping the last student
console.log(students);

console.log(students.sort()); /// sorting in alphabetical order

console.log(students.includes("Nyima")); //checkingif there is that student



