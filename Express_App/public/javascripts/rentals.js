//Search dvd by name

function populateInfoCard(title, description) {
    document.getElementById('title').innerHTML = title
    document.getElementById('description').innerHTML = description

    //Check DVD availability
}

function addToOrder() {
    console.log('Add to cart')
    updateCartTotal()
}

function removeFromCart() {
    console.log('Remove to cart')
}

function updateCartCount() {
    document.getElementById('cartHeader').innerHTML = 'Cart (' + getCartCount() + ')'
    
    console.log('Update cart count')
}

function updateCartTotal() {
    console.log('Update cart total')
}

function getCartCount() {
    let count = 0;

    return count
}