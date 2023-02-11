//ARROW FUNCTIONS

//arrow functions started in es6 version of javascript
// function sum(a,b) {
//     return a+b;
// }
//functions create variables with the given function name
// let sum2 = (a,b) => a+b ; //everything after arrow is returned 

// function isPositive(number) {
//     return number>=0;
// }

// let isPositive2 = number => number>=0;

// function randomNumber() {
//     return Math.random;
// }
// let randomNumber = () => Math.random;

// document.addEventListener('click',() => console.log('Click'))

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     printNameArrow() {
//         setTimeout(() => {
//             console.log('Arrow: '+this.name)
//         },100)
//     }
//     printNameFunction() {
//         setTimeout(function() {
//             console.log('Function: '+ this.name)
//         },100)
//     }
// }
//normal function does not print out the name coz normal function does not recognize the name given as parameters into the function since the scpoce is different
//scoping is the biggest advantage of using the arrow functions

// let person = new Person('Bob')
// person.printNameArrow();
// person.printNameFunction(); 

//--------------------------------------------------------------

//PROMISES

// let p = new Promise((resolve, reject)=> {
//       let a = 1+3;
//       if(a==2) {
//             resolve('Success')
//       }else {
//         reject('failed')
//       }
// })
//.then will always run for resolve, similarly, .catch will run for else so we always need to write .then and .catch both for promises
// p.then((message)=> {
//     console.log("This is in the "+message)
// }).catch((message)=> {
//     console.log("This is in the catch of "+message)
// })

// const userLeft = false; 
// const userWatchingMeme = true 
// function watchTutorial(callBack,errorCallBack) {
//     if (userLeft) {
//         errorCallBack ({
//             name: 'User left',
//             message: ':('
//         })
//     }
//     else if(userWatchingMeme) {
//         errorCallBack ({
//             name: 'User watching cat meme',
//             message: 'Enjoy your free time'
//         })
//     }
//     else {
//         callBack('Thumbs up as subscribe')
//     }
// }

// watchTutorial((message=>{
//     console.log('Success: '+message)
// },(error)=> {
//     console.log(error.name+" "+error.message);
// }))
//fetch is basically used to request data from server
//what is a server ?
//A server is a computer program or device that provides a service to another computer program and its user, also known as the client.
//fetch returns a promise 
//fetch rejects or does not return if it was unable to make a HTTP-request 

// fetch('https://reqres.in/api/users',{
//     method: 'POST',
//     headers: {
//         'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//         name: 'User 1'
//     })
// })
//     .then(jack=> {
//         return jack.json();
//     })
//     .then(hello => console.log(hello))
//     .catch(error => console.log('Error'))

//fetch always suceeds unless there is a network error or fetch itself is unable to work
//then returns a response object, so res is response

var person = {
    //objects are collection of key value pair
    name: "Man",
    //functions in objects are called methods
    walk() {
        console.log("This is walk function")
    },
    talk() {
        console.log("This is talk function")
    } 
};

person.walk();
person.talk();
person['name']='John';
console.log(person['name']);


//THIS keyword 

console.log("THIS KEYWORD : ");
var person = {
    name: "Man",
    walk() {
        console.log(this)
    },
    talk() {
        console.log(this)
    } 
};
person.walk(); 
//returns a reference to person object
const walk = person.walk ;
walk();
//so if we use the walk as a method, it will return an object but if we call walk an a stand alnoe function without any object it returns a universal object in case strict mode is off
//now walk is a function ^^

// BINDING THIS TO AN OBJECT
//in js, functions are objects with a few default methods
console.log("BINDING THIS :")
const talk = person.talk.bind(person);
talk();
//so bind keyword binds the function to the object, bind will return an object of person

//ARROW FUNCTIONS
console.log('ARROW FUNCTIONS: ');
const square = number => number*number;
console.log(square(5));
const jobs = [
    {id:'1', isActive: true},
    {id:'1', isActive: true},
    {id:'1', isActive: false}
]
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs)

//this keyword using normal functions
console.log("This keyword using normal functions: ");
const person1 = {
    talk1() {
        var self = this ;
        setTimeout(function() {
            console.log("self: ",self);
        },1000);
    }
};
console.log(person1.talk1());

//this keyword using arrow functions
console.log("This keyword using arrow functions: ");
const person2 = {
    talk2() {
        var self = this ; 
        setTimeout(() => {
            console.log("this: ",this);
        },1000);
    }
};
console.log(person2.talk2());

//ARRAY - MAP 
console.log("ARRAY MAP: ")
const colors = ['red','green','blue'];
console.log(colors.map(color=>`<li>${color}</li>`));

//OBJECT DESTRUCTURING 
console.log("OBJECT DESTRUCTURING: ");
const address = {
    street: 'lingampally',
    city: 'hyderabad',
    country:'india'
};

//const street = address.street;
//const city = adderss.city;
//const county = address.county;

//with destructuring 
const {street:st, city:ct, country:cu} = address  ;
console.log(st, ct, cu)

//SPREAD OPERATOR 
//array concatenation
console.log("SPREAD OPERATOR");
const first = [1,2,3];
const second = [4,5,6];
const combined = first.concat(second);
const combined1 = [...first, 'a',...second,'b'];
console.log(combined1);
//object concatenation
const obj1 = {name:'Mosh'};
const obj2 = {job: 'Instructor'};
const concat = {...obj1,...obj2,location:'India'};
console.log(concat);


//CLASSES
console.log('CLASSES: ');
class newPerson {
    constructor(name) {
        this.name=name;
        console.log(this.name+' constructor called')
    }
    walk() {
        console.log('walk');
    }
}
const newPerson1 = new newPerson('Manvitha')

//INHERITANCE 
console.log('INHERITANCE');
class Teacher extends newPerson{
    constructor(name,degree) {
         
    }
    teach() {
        console.log("Teaching");
    }
}
const teacher = new Teacher('Mosh');
teacher.walk();
teacher.teach();