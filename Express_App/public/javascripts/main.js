//Search dvd by name
function searchDVD() {

        let input = document.querySelector('#search').value;
        input = input.toLowerCase();
        let x = document.querySelectorAll('.dvd');

        for (i = 0; i < x.length; i++) {
            if (!x[i].innerHTML.toLowerCase().includes(input)) {
                x[i].style.display = "none";
            }
            else {
                x[i].style.display = "list-item";
            }
        }
}

let cartCount = 0;
let totalPrice = 0;
const maxCartSize = 5;


function populateInfoCard(title, description, available) {
    document.querySelector('#title').innerHTML = title
    document.querySelector('#description').innerHTML = description

    checkAvailibility(available)
}

function checkAvailibility(available) {
    if (available === "false") {
        document.querySelector('#add').textContent = "Not Available"
        document.querySelector('#add').disabled = true;
    }
    else {
        document.querySelector('#add').textContent = "Add to Order"
        document.querySelector('#add').disabled = false;
    }
}

function addToCart() {

    let price = 6;

    let title = document.querySelector("#title").innerHTML;

    if (title !== '') {
        let table = document.querySelector("#cartTable");

        let lastRow = table.rows[table.rows.length - 1];

        let row = table.insertRow(lastRow + 1);

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        let button = document.createElement('input');
        button.type = "button";
        button.className = 'col-sm-2 button close';
        button.setAttribute('id', 'remove')
        button.onclick = function () { removeFromCart() };
        button.value = "x";


        cell1.innerHTML = title;
        cell1.className = 'col-sm-8';
        cell2.innerHTML = price + ".00";   //will get price
        cell2.className = 'col-sm-2';
        cell3.appendChild(button)

        increaseCartCount();
        updateCartTotal(price);
    }
}

function increaseCartCount() {
    if (cartCount <= maxCartSize) {
        document.querySelector('#cartHeader').innerHTML = "Cart (" + ++cartCount + ")";
    }
}

function removeFromCart() {
    let table = document.querySelector("#cartTable");
    let row = event.target.parentNode.parentNode;
    let price = row.cells[1].innerHTML;
    price = parseFloat(price);
    decreaseCartTotal(price);
    table.deleteRow(row.rowIndex);
    decreaseCartCount();
}


function decreaseCartCount() {
    if (cartCount > 0) {
        document.querySelector('#cartHeader').innerHTML = "Cart (" + --cartCount + ")";
    }
}

function updateCartTotal(price) {
    totalPrice += price;
    document.querySelector('#totalPrice').innerHTML = totalPrice + ".00";
}


function decreaseCartTotal(price) {
    totalPrice -= price;
    document.querySelector('#totalPrice').innerHTML = totalPrice + ".00";
}

function processRental(){
    if (cartCount > 0) {
        //create alert window to confirm rental
        let confirm = window.confirm("Are you sure you want to rent these DVDs?");
        if (confirm) {
            clearCart();
            alert("Thank you for renting with us!");
        }
    }
    else {
        alert("Please add a DVD to your order")
    }
}

function clearCart() {
    let table = document.querySelector("#cartTable");
    let rowCount = table.rows.length;

    for (let i = rowCount - 1; i >= 0; i--) {
        table.deleteRow(i);
    }

    document.querySelector('#cartHeader').innerHTML = "Cart (0)";
    document.querySelector('#totalPrice').innerHTML = "0.00";
    cartCount = 0;
    totalPrice = 0;
}