// let lectures = 12;
// let section = 3;
// let title = 'Javascript';

// //objects 
// const course = {
//     lecture: 10,
//     section: 3,
//     title: 'Javascript',
//     notes: {
//         introduction: 'welcome to java script tutorial'
//     },
//     enroll() {
//         console.log("You have entered into the enroll function of class");
//     }
// }

// function enroll() {
//     console.log("You are successfully enrolled");
// }

// course.enroll();
// enroll();

// course.price = 99 ;

// console.log(course.price);
function createCourse(ftitle) {
    return {
        title: ftitle,
        notes: {
            introduction: 'welcome to java script tutorial'
        },
        enroll() {
            console.log("You have entered into the enroll function of class");
        }
    }
}

const course = createCourse('java script');
course.enroll();
console.log(course.title);

//constructor case
function Course(title) {
    this.title = title;
    
}