//Search dvd by name

let cartCount = 0;
let totaPrice = 0;
const maxCartSize = 5;

function populateInfoCard(title, description, available) {
    document.querySelector('#title').innerHTML = title
    document.querySelector('#description').innerHTML = description

    checkAvailibility(available)
}

function checkAvailibility(available) {
    if (available == "false") {
        document.querySelector('#add').textContent = "DVD not available"
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

    if (title != '') {
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

    //ensure correct row is deleted - get row number
    document.querySelector("#cartTable").deleteRow(0);
    console.log('Remove from cart');
    decreaseCartCount();
    updateCartTotal(price);
}

function decreaseCartCount() {
    if (cartCount > 0) {
        document.querySelector('#cartHeader').innerHTML = "Cart (" + --cartCount + ")";
    }
}

function updateCartTotal(p) {

    //check if adding or removing to increase or decrease price - complete mess, need to fix

    const add = document.querySelector('#add');
    const remove = document.querySelector('#remove');


    add.addEventListener("click", increase);
    function increase() {
        totaPrice += p;
        console.log('increase price');
    }

    remove.addEventListener("click", decrease);
    function decrease() {
        totaPrice -= p;
        console.log('decrease price');
    }

    document.querySelector('#totalPrice').innerHTML = totaPrice + ".00";
    console.log('Update cart total')
}

