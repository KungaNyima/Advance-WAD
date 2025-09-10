function fullname(first,last){
    const fullname=first + " "+ last
    return fullname
}
//Calling the function with the given arguments
console.log(fullname('Kunga','Gurung'))



function fullname3(first,last){
    const fullname3=first + " " + last
    return fullname3
}
console.log(fullname3('Kunga','Gurung'))

//Arow function with explicit return function

const fullname2= (fname,lname) => {return 'Hello'+ ' '+ fname + " "+lname}
console.log(fullname2('Kunga','Gurung'))



