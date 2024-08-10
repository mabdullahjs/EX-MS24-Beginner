// backtick string

// var username = "abdullah";
// var age = 21;

// console.log("my name is " + username + " and my age is " + age)

// console.log(`my name is ${username} and my age is ${age}`)


// var div = document.querySelector("div");
// var fruit = ["mango", "orange", "banana"];

// fruit.push("pineapple");

// fruit.splice(1, 0, "apple", "abc");

// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
//     div.innerHTML += `fruit name = ${fruit[i]} <br/>`
// }



//CRUD 

// Create
// read
// update
// delete



var input = document.querySelector("#todo");
var list = document.querySelector("ol");

var todo = [];

function renderTodo(){
    list.innerHTML = ""
    for(var i = 0; i < todo.length; i++){
        list.innerHTML += `
        <li>${todo[i]}
        <button onclick="deleteTodo(${i})">Delete</button>
        <button onclick="editTodo(${i})">Edit</button>
        </li>
        ` 
    }

}

function addTodo(){
    todo.push(input.value);
    console.log(todo);
    renderTodo()
    input.value = ""
    
}


function deleteTodo(index){
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    console.log(todo);

   renderTodo()
    
}
function editTodo(index){
    var updatedValue = prompt("enter updated value");
    todo.splice(index , 1 , updatedValue);
    renderTodo()
}