// console.log('hello world!');

// switch case
// hoisting
// let const
// set interval
// set timeout



// let num = 6;

// if (num > 10) {
//     console.log('if chal rha ha');
// } else {
//     console.log('else chal rha ha');

// }


// switch (num) {
//     case 5:
//         console.log("num is 5")
//         break
//     case 4:
//         console.log("num is 4")
//         break
//     case 3:
//         console.log("num is 3")
//         break
//     default:
//         console.log("else");
// }


// switch (true) {
//     case num > 5:
//         console.log("if chal rha ha");
//         break
//     default:
//         console.log('else chal rha ha');

// }
























// hoisting

// console.log(username);
// var username = "abdullah";

// hello()

// function hello(){
//     console.log('hello world!')
// }



// var  x
//hoisting yes
//redeclare yes
//reassign yes

// let
//hoisting no
//redeclare no
//reassign yes



// const
//hoisting no
//redeclare no
//reassign no


// var city = "karachi"; 
// var city = "lahore";
// city = "islamabad";

// console.log(username);
// let username = "abdullah";
// username = "usman";
// console.log(username);

// let city;
// city = "karachi"

// const username = "abdullah";
// console.log(username);














//settimeout(function , millisecond)

// setTimeout(function (){
//     console.log("console after one second")
// } , 2000)


// setInterval(function (){
//     console.log("console after one second")
// } , 1000)




// let num = 0

// setInterval(function (){
//     num += 1;
//     console.log(num);
    
// } , 1000)




// screen pa by default 0 likha hua ajaye uska necha aik btn ho jaisa hi us btn pa click kro ma to wo brhta rehjaye timer ki tarah


const head = document.querySelector("#timer")

var timer;
var num = 0

function startTimer (){
    timer = setInterval(function (){
        num += 1
        head.innerHTML = num
        
    } , 1000)
}


function stopTimer(){
    clearInterval(timer)
}

// clearTimeout() timeout ko clear krna ka liya





























