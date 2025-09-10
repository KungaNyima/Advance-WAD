function closure(){
    let val = 1;
    return function(){
        return val++;
    }
}
const nextvalue = closure();
console.log(nextvalue());
console.log(nextvalue());

closure();