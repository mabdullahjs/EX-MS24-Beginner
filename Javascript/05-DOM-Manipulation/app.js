// var a = 10;
// function hello(num1) {
//     var b = 20
//     console.log(num1 , b);
//     return num1
// }

// console.log(a)
// console.log(b)
// var returnedVal = hello(20);
// console.log(hello());











// function hello(username){
//     return 'hello ' + username
// }

// hello("abdullah")



var head = document.querySelector("#head");
var num = 0
function changeText() {
    console.log("hello")
    head.innerHTML = "change through javascript " + num
    // num = num + 1
    num += 1
}




// counter banana haa aik + ka button hoga or dosra - ka button hoga plus ka button dabana paa counter increase or - ka button dabana pa counter decrease. agar counter 0 decrease wala kaam na hoo

var head = document.querySelector("#head");

var num = 0
function add() {
    num += 1
    head.innerHTML = num
}
function subtract() {
    if(num === 0){
        console.log("ya nahi chalaiga")
    }else{
        num -= 1
        head.innerHTML = num
    }
   
}