let changeColor = document.getElementById("btn");
let body = document.body;

const colors = ['pink', "red", "orange"];

changeColor.addEventListener('click', change);
let count = -1;

function change() {
    if(count>=colors.length-1) {
        count=0;
        body.style.background=colors[count];
    }
    else {
        count=count+1;
        body.style.background=colors[count];
    }
} 

// const a = ["#FFDCA9", "#CE7777", "#A5F1E9", "#ADE792"];
// let i = 0;
// document.querySelector("button").addEventListener("click", change);
// function change() { 
//     document.querySelector("body").style.backgroundColor = a[i];
//     i++;
//     if (i > 3) {
//         i = 0;
//     }
// };
