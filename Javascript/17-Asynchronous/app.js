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

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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



// const filteredArr = num.filter(item => item > 5);
// console.log(filteredArr);


// let stringify = JSON.stringify(fruit);
// localStorage.setItem("fruit" , stringify)

// let data = JSON.parse(localStorage.getItem("fruit"));
// console.log(data);


// localStorage.removeItem("fruit")




// function sum(num1 , num2){
//     return num1 + num2
// }

// var total = sum(20 , 40);
// console.log(total)

// const sum = (num1 , num2) => {
//     return num1 + num2
// }
// const sum = (num1 , num2) => num1 + num2

// console.log(sum(20 , 30));











// for each

// for each ka function kuch bhi return nahi krta.

// const allFruits = fruit.forEach(function (item){
//     console.log(item)
//     return item
// })

// console.log(allFruits)











// foreach and map same hain just return wala farq haa
// foreach return nahi krta kuch bhi
// map return krta ha


// const allFruits = fruit.map(item => {
//     console.log(item)
//     return item + " fruit"
// })

// console.log(allFruits)


// const filteredNum = num.filter(item => {
//     return item > 5
// })

// console.log(filteredNum);






// const products = [
//     // Electronics
//     {
//         name: "Wireless Mouse",
//         price: 25.99,
//         category: "Electronics",
//         brand: "Logitech"
//     },
//     {
//         name: "Smartphone",
//         price: 699.99,
//         category: "Electronics",
//         brand: "Samsung"
//     },
//     {
//         name: "LED Monitor",
//         price: 129.99,
//         category: "Electronics",
//         brand: "Dell"
//     },
//     {
//         name: "Bluetooth Speaker",
//         price: 45.99,
//         category: "Electronics",
//         brand: "JBL"
//     },
//     {
//         name: "Laptop",
//         price: 999.99,
//         category: "Electronics",
//         brand: "Apple"
//     },

//     // Footwear
//     {
//         name: "Running Shoes",
//         price: 59.99,
//         category: "Footwear",
//         brand: "Nike"
//     },
//     {
//         name: "Sneakers",
//         price: 75.99,
//         category: "Footwear",
//         brand: "Adidas"
//     },
//     {
//         name: "Sandals",
//         price: 25.99,
//         category: "Footwear",
//         brand: "Teva"
//     },
//     {
//         name: "Formal Shoes",
//         price: 120.00,
//         category: "Footwear",
//         brand: "Clarks"
//     },
//     {
//         name: "Boots",
//         price: 150.00,
//         category: "Footwear",
//         brand: "Timberland"
//     },

//     // Home Appliances
//     {
//         name: "Blender",
//         price: 34.99,
//         category: "Home Appliances",
//         brand: "Oster"
//     },
//     {
//         name: "Microwave Oven",
//         price: 99.99,
//         category: "Home Appliances",
//         brand: "Panasonic"
//     },
//     {
//         name: "Air Conditioner",
//         price: 299.99,
//         category: "Home Appliances",
//         brand: "LG"
//     },
//     {
//         name: "Vacuum Cleaner",
//         price: 149.99,
//         category: "Home Appliances",
//         brand: "Dyson"
//     },
//     {
//         name: "Toaster",
//         price: 29.99,
//         category: "Home Appliances",
//         brand: "Breville"
//     },

//     // Stationery
//     {
//         name: "Notebook",
//         price: 3.99,
//         category: "Stationery",
//         brand: "Moleskine"
//     },
//     {
//         name: "Pen Set",
//         price: 12.99,
//         category: "Stationery",
//         brand: "Parker"
//     },
//     {
//         name: "Highlighters",
//         price: 5.99,
//         category: "Stationery",
//         brand: "Sharpie"
//     },
//     {
//         name: "Stapler",
//         price: 7.99,
//         category: "Stationery",
//         brand: "Swingline"
//     },
//     {
//         name: "Planner",
//         price: 14.99,
//         category: "Stationery",
//         brand: "Erin Condren"
//     },

//     // Furniture
//     {
//         name: "Desk Chair",
//         price: 89.99,
//         category: "Furniture",
//         brand: "Ikea"
//     },
//     {
//         name: "Coffee Table",
//         price: 129.99,
//         category: "Furniture",
//         brand: "West Elm"
//     },
//     {
//         name: "Sofa",
//         price: 499.99,
//         category: "Furniture",
//         brand: "Ashley Furniture"
//     },
//     {
//         name: "Bookshelf",
//         price: 79.99,
//         category: "Furniture",
//         brand: "Sauder"
//     },
//     {
//         name: "Dining Table",
//         price: 399.99,
//         category: "Furniture",
//         brand: "Pottery Barn"
//     },

//     // Fitness
//     {
//         name: "Yoga Mat",
//         price: 19.99,
//         category: "Fitness",
//         brand: "Gaiam"
//     },
//     {
//         name: "Dumbbells",
//         price: 49.99,
//         category: "Fitness",
//         brand: "Bowflex"
//     },
//     {
//         name: "Treadmill",
//         price: 699.99,
//         category: "Fitness",
//         brand: "NordicTrack"
//     },
//     {
//         name: "Resistance Bands",
//         price: 14.99,
//         category: "Fitness",
//         brand: "Fit Simplify"
//     },
//     {
//         name: "Exercise Bike",
//         price: 299.99,
//         category: "Fitness",
//         brand: "Peloton"
//     },

//     // Kitchen Appliances
//     {
//         name: "Coffee Maker",
//         price: 49.99,
//         category: "Kitchen Appliances",
//         brand: "Keurig"
//     },
//     {
//         name: "Air Fryer",
//         price: 89.99,
//         category: "Kitchen Appliances",
//         brand: "Ninja"
//     },
//     {
//         name: "Stand Mixer",
//         price: 199.99,
//         category: "Kitchen Appliances",
//         brand: "KitchenAid"
//     },
//     {
//         name: "Refrigerator",
//         price: 799.99,
//         category: "Kitchen Appliances",
//         brand: "Whirlpool"
//     },
//     {
//         name: "Dishwasher",
//         price: 399.99,
//         category: "Kitchen Appliances",
//         brand: "Bosch"
//     }
// ];

// const items = document.querySelector(".items");

// console.log(products)

// function renderItems(arr){
//     items.innerHTML = ""
//     arr.map((item) => {
//         // console.log(item)
//         items.innerHTML += `
//         <div class="card">
//                 <h1>${item.name}</h1>
//                 <h2>${item.category}</h2>
//                 <p>${item.price}</p>
//             </div>
//         `
//     })
// }

// renderItems(products)

// const btn = document.querySelector(".btn");

// btn.addEventListener("click" , (event)=>{
//     console.log(event.target.innerHTML);
//     const filteredProduct = products.filter((item)=>{
//         return item.category === event.target.innerHTML
//     })
//     console.log(filteredProduct)
//     renderItems(filteredProduct)
// })




// const num = [1, 2, 3, 4];

// const totalVal = num.reduce((accumulator , currentVal)=>{
//     return accumulator + currentVal
//     // 6 + 4
// } , 0)

// console.log(totalVal);








// scalable web application

// setTimeout(() => {
//     console.log("data"); //async data mangwa rha
// }, 1000);




// promises

// pending  
// fulfilled 
// rejected




// const asyncTask = new Promise((resolve, reject) => {
//     let error = false;
//     if (error) {
//         setTimeout(() => {
//             console.log("async task")
//             resolve()
//         }, 1000)
//     }else{
//         reject()
//     }
// })

// asyncTask
//     .then(() => {
//         console.log("task succesful")
//     })
//     .catch(() => {
//         console.log("task rejected")

//     })





// let bankBalance = 200000;

// const shaadiScnz = new Promise((resolve , reject)=>{
//     if(bankBalance > 500000){
//         setTimeout(()=>{
//             resolve("shaadi mubarak")
//         } , 2000)
//     }else{
//         setTimeout(()=>{
//             reject("Chalo shaba katto")
//         } , 2000)
//     }
// })

// console.log(typeof shaadiScnz)
// shaadiScnz
// .then((res)=>{
//     console.log(res)
//     console.log(shaadiScnz);

// }).catch((err)=>{
//     console.log(err);
//     console.log(shaadiScnz);

// })









// function carFinding(model){
//     return new Promise((resolve , reject)=>{
//         if(model > 2010){
//             setTimeout(() => {
//                 resolve("maalik waara ka sooda haa.")
//             }, 2000);
//         }else{
//             setTimeout(() => {
//                 reject("maalik loot ka agaye ho");

//             }, 2000);
//         }
//     })
// }

// carFinding(2015)
// .then((res)=>{
//     console.log("pehla .then", res);
//     return res + "return krwadia"
// }).then((res)=>{
//     console.log("dosra .then",res);

// })
// .catch((err)=>{
//     console.log(err);

// })



// aler("hello world");
// console.log("console after alert")


// try{
//     aler("hello world");
// }catch(error){
//     console.error(error);

// }


// console.log("console after alert")






// async function runAsynTask(){
//     try {
//         const carResult = await carFinding(2020)
//         console.log(carResult)
//     } catch (error) {
//         console.log("catch chal rha ha. ",error);

//     }
// }


// runAsynTask()














// Application programming interface

// {
//     "username": "abdullah"
// }


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((res)=>{
//     return res.json()
// }).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);

// })


















const div = document.querySelector(".items");


// fetch("https://course-admission-portal.vercel.app/api/v1/student")
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => console.log(err))





// async function getData (){

// }

const getData = async () => {
    try {
        const response = await fetch("https://course-admission-portal.vercel.app/api/v1/student")
        const data = await response.json();
        console.log(data);
        data.map((item)=>{
            div.innerHTML += `
            <div>
            <h1>${item.fullName}</h1> <hr/>
            </div>
            `
        })
    } catch (error) {
        console.log(error)
    }
}


getData()




// map , filter , foreach , reduce
// promises
// then catch || async await
// api sa data fetch krna haa
// api sa jo data araha ha usko screen pa render krwana haa.. 



