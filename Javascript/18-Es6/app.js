// Variable Scoping // p
// Closure 
// lexical scoping 
// Modules
// Object Methods (keys,values,freez,entries) // p
// Exponentiation Operator 
// Optional chaining 
// Destructuring //p
// Template literals //p
// Default parameters //p
// Rest parameter //p
// Spread Operator //p
// Arrow functions// p
// Ternary Operator //p



// important topics

// dom manipulation
// map, filter, reduce
// modules import / export
// promises async await
// Api fetch
// destructuring
// spread operator
// ternary operator


// weather app 
// github api
// tailwind css





// fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${karachi}&aqi=no`)
// .then(res => res.json())
// .then(res => console.log(res))





















// let
// const
// var


// var username = "abdullah";
// var username = "usman";
// username = "ammar"


// let username = "abdullah";
// // let username = "usman"; redeclare nahi krskta
// username = "ammar"


// const username = "abdullah";












// variable scoping

// if (true) {
//     let username = "abdullah"
// }

// console.log(username)







// object destructuring

// const obj = {
//     username: "abdullah",
//     email: "mabdullah2037@gmail.com",
//     age: 21,
// }

// const {username , age} = obj












// array destructuring

// const fruit = ["mango" , "orange" , "banana"];

// const [,  , fruit3] = fruit

// console.log(fruit3);














// object methods


// Object.freeze(obj)

// obj.hobbies = ["cricket" , "cooking" , "eating"];
// console.log(obj);

// const keys = Object.keys(obj);
// const values = Object.values(obj);
// const entries = Object.entries(obj);
// console.log(keys);
// console.log(values);
// console.log(entries);







































// spread operator

// const arr1 = ["abc" , "def" , "fad" , "dfds"];
// const arr2 = ["trrt" , "erew" , ...arr1]
// console.log(arr2);

// const obj1 = {
//     age: 21, 
//     email : "abc@gmail.com"
// }

// const obj2 = {
//     username: "abdullah",
//     ...obj1
// }
// console.log(obj2);



// rest operator


// function calculateUser (...user){
//     console.log(user)
// }
// calculateUser("Abc" , "ere" ," fdfdsf" , "Fdsfsre" , "arguments")






// default parameter

// function greetUser (username = "abdullah"){
//     console.log(`hello ${username}`)
// }

// greetUser("usman")





























// Arrow function

// function sum(num1 , num2 ) {
//     return num1 + num2
// }
// console.log(sum(20 , 30));

// console.log(username);

// var username = "abc"

// const sum = (num1) => num1 + num2

// const total = sum(20 , 30);
// console.log(total);








// Exponentiation Operator 

// const num = 9 ** 6;
// console.log(num);





// Optional chaining 


// const obj = {
//     user: {
//         username: "abdullah",
//         age: 20
//     }
// }

// console.log(obj.abc?.age);















// ternary operator

// const age = 17
// if(age > 18){
//     console.log("welcome to the gym");

// } else if(age > 16){
//     console.log("1000 extra do or welcome")
// }

// else {
//     console.log("chalo shaba kato");

// }


// age > 16 ? console.log("welcome to the gym") :  console.log("chalo shaba kato")



// age > 18 ? console.log("welcome to the gym") : age > 16 ? console.log("1000 extra do or welcome") : console.log("chalo shaba kato")






























// function outerFunc(){
//     let outervar = "abc"

//     function innerFunc(){
//         let innerVar = "inner variable"
//         console.log(outervar)
//     }

//     function innerFunc2 (){
//         console.log(innerVar)
//     }

//     innerFunc()
//     innerFunc2 ()
// }

// outerFunc()







// function outer(){
//     let outervar = "Abc"

//     return function innerFunc (){
//         console.log("inner func ==>" , outervar);

//     }
// }

// outer()
// const closure = outer()
// closure()


























// const num = [1, 2, 3, 4, 5, 6, 7, 8]

// const total = num.reduce(function (accumulator , currentVal){
//     return accumulator + currentVal
// } , 0)

// console.log(total);











const products = [
    // Electronics
    {
        name: "Wireless Mouse",
        price: 25.99,
        category: "Electronics",
        brand: "Logitech"
    },
    {
        name: "Smartphone",
        price: 699.99,
        category: "Electronics",
        brand: "Samsung"
    },
    {
        name: "LED Monitor",
        price: 129.99,
        category: "Electronics",
        brand: "Dell"
    },
    {
        name: "Bluetooth Speaker",
        price: 45.99,
        category: "Electronics",
        brand: "JBL"
    },
    {
        name: "Laptop",
        price: 999.99,
        category: "Electronics",
        brand: "Apple"
    },

    // Footwear
    {
        name: "Running Shoes",
        price: 59.99,
        category: "Footwear",
        brand: "Nike"
    },
    {
        name: "Sneakers",
        price: 75.99,
        category: "Footwear",
        brand: "Adidas"
    },
    {
        name: "Sandals",
        price: 25.99,
        category: "Footwear",
        brand: "Teva"
    },
    {
        name: "Formal Shoes",
        price: 120.00,
        category: "Footwear",
        brand: "Clarks"
    },
    {
        name: "Boots",
        price: 150.00,
        category: "Footwear",
        brand: "Timberland"
    },

    // Home Appliances
    {
        name: "Blender",
        price: 34.99,
        category: "Home Appliances",
        brand: "Oster"
    },
    {
        name: "Microwave Oven",
        price: 99.99,
        category: "Home Appliances",
        brand: "Panasonic"
    },
    {
        name: "Air Conditioner",
        price: 299.99,
        category: "Home Appliances",
        brand: "LG"
    },
    {
        name: "Vacuum Cleaner",
        price: 149.99,
        category: "Home Appliances",
        brand: "Dyson"
    },
    {
        name: "Toaster",
        price: 29.99,
        category: "Home Appliances",
        brand: "Breville"
    },

    // Stationery
    {
        name: "Notebook",
        price: 3.99,
        category: "Stationery",
        brand: "Moleskine"
    },
    {
        name: "Pen Set",
        price: 12.99,
        category: "Stationery",
        brand: "Parker"
    },
    {
        name: "Highlighters",
        price: 5.99,
        category: "Stationery",
        brand: "Sharpie"
    },
    {
        name: "Stapler",
        price: 7.99,
        category: "Stationery",
        brand: "Swingline"
    },
    {
        name: "Planner",
        price: 14.99,
        category: "Stationery",
        brand: "Erin Condren"
    },

    // Furniture
    {
        name: "Desk Chair",
        price: 89.99,
        category: "Furniture",
        brand: "Ikea"
    },
    {
        name: "Coffee Table",
        price: 129.99,
        category: "Furniture",
        brand: "West Elm"
    },
    {
        name: "Sofa",
        price: 499.99,
        category: "Furniture",
        brand: "Ashley Furniture"
    },
    {
        name: "Bookshelf",
        price: 79.99,
        category: "Furniture",
        brand: "Sauder"
    },
    {
        name: "Dining Table",
        price: 399.99,
        category: "Furniture",
        brand: "Pottery Barn"
    },

    // Fitness
    {
        name: "Yoga Mat",
        price: 19.99,
        category: "Fitness",
        brand: "Gaiam"
    },
    {
        name: "Dumbbells",
        price: 49.99,
        category: "Fitness",
        brand: "Bowflex"
    },
    {
        name: "Treadmill",
        price: 699.99,
        category: "Fitness",
        brand: "NordicTrack"
    },
    {
        name: "Resistance Bands",
        price: 14.99,
        category: "Fitness",
        brand: "Fit Simplify"
    },
    {
        name: "Exercise Bike",
        price: 299.99,
        category: "Fitness",
        brand: "Peloton"
    },

    // Kitchen Appliances
    {
        name: "Coffee Maker",
        price: 49.99,
        category: "Kitchen Appliances",
        brand: "Keurig"
    },
    {
        name: "Air Fryer",
        price: 89.99,
        category: "Kitchen Appliances",
        brand: "Ninja"
    },
    {
        name: "Stand Mixer",
        price: 199.99,
        category: "Kitchen Appliances",
        brand: "KitchenAid"
    },
    {
        name: "Refrigerator",
        price: 799.99,
        category: "Kitchen Appliances",
        brand: "Whirlpool"
    },
    {
        name: "Dishwasher",
        price: 399.99,
        category: "Kitchen Appliances",
        brand: "Bosch"
    }
];
console.log(products);

const total = products.reduce((acc , cval)=>{
    return acc + cval.price
} , 0)

console.log(Math.round(total));
