const getData = localStorage.getItem("cartItem");
const cartItem = JSON.parse(getData)
console.log(cartItem);


const div = document.querySelector("#phones");

let totalAmount = 0;
function renderItems() {
    totalAmount = 0
    div.innerHTML = "";
    console.log(cartItem)
    if (cartItem === null) {
        console.log("no item found")
        div.innerHTML = "no item found"
        return
    }
    for (let i = 0; i < cartItem.length; i++) {
        totalAmount += cartItem[i].price * cartItem[i].quantity

        console.log(cartItem[i].price , cartItem[i].quantity)
        div.innerHTML += `
        <div class="card bg-dark text-light border-light" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${cartItem[i].brand} ${cartItem[i].model}</h5>
                    <h5> Quantity: <button onclick="addQuantity(${i})">+</button> ${cartItem[i].quantity} <button onclick="lessQuantity(${i})">-</button></h5>
                    <h5 class="card-title h6">Rs: ${cartItem[i].price}</h5>
                </div>
            </div>
        `
    }

    console.log(totalAmount);
    
}

renderItems()


function addQuantity(index) {
    console.log("quantity added" , index);
    cartItem[index].quantity += 1
    console.log(cartItem)
    renderItems()
}

function lessQuantity(index) {
    console.log("quantity less" , index)
    cartItem[index].quantity -= 1
    renderItems()
}