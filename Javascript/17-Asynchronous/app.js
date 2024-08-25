// console.log("hello world 1");
// console.log("hello world 2");
// setTimeout(function () {
//     console.log("hello world 3");

// }, 0);
// console.log("hello world 4");


// settimeout
// set interval
// fetch
// axios
// promises
// async await



// hello("abdullah")
// function hello (username){
//     console.log(`hello ${username}`);

// }


// const hello = (username)=>{
//     console.log(`hello ${username}`);

// }
// hello("abdullah")


// parameter agar sirf aik haa to round bracket() dalna ki zaroorat nahi ha.
// simple return kr rha ho to na scope kholo na return keyword likho


// const sum = num1 => num1 + 30
// console.log(sum(20));



// const greetUser = username => `hello ${username}`




// callback function
// higher order function

// map
// filter
// reduce




const fruit = ["apple", "banana", "orange", "mango", "kiwi"];

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fruit.map(function (item , index){
//     console.log(item , index);
// })


// fruit.map((item , index) => {
//     console.log(item);
// })



// const returnedArr = fruit.forEach((item , index) => {
//     console.log(item);
//     return item + "ab"
// })


// console.log(returnedArr);


// const returnedArr = num.map((item , index) => {

//     console.log(item);
//     return item + 5
// })

// console.log(returnedArr);

// const div = document.querySelector("div");

// fruit.map(item =>{
//     div.innerHTML += `<p>${item}</p>`
// })



const filteredArr = num.filter(item => item > 5);
console.log(filteredArr);

