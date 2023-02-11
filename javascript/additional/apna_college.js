// let button1 = document.querySelector('button');
// button1.addEventListener('click',inputMsg);
// function inputMsg() {
//     let name = prompt ("Enter name of student");
//     button1.textContent = " Roll no 1: "+name ; 
// }

var num = 5;
console.log(typeof num);
// camel case - firstvariable 
// pascal case - FisrtVariable
//snake case - first_Variable
// console.log("$(variable name) text required" )
//this will avoid concatenation/ using + symbol for adding two strings
for (let i = 0; i < 5; i++) {
    console.log("5 X " + (i + 1) + " = " + (5 * i));
}
//for, while, do-while, for-in (needs objects), for-of

//for-in using objects
let animal = {
    name: 'Zebra',
    leg: 4
}
for (let key in animal) {
    console.log(key, animal[key]);
}
//for in using arrays
let anems = ['manvitha','agranya'];
for(let index in names) {
    console.log(index);
}

