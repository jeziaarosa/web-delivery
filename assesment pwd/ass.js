function addToSidebar(button) {
    var card = button.closest('.card');
    var title = card.querySelector('.card-title').innerText;
    var price = parseFloat(card.querySelector('.card-text').innerText.replace('Rp. ', ''));

    // new list item sidebar
    var listItem = document.createElement('li');
    listItem.innerHTML =  `<strong>${title}</strong> - Rp. ${price.toFixed(3)}`;
    listItem.classList.add('cart-item'); // Add a class for styling

    // add the new item sidebar
    document.getElementById('cart-items').appendChild(listItem);

    // Update total                         
    updateTotal(price);
    // Update footer total
    updateFooterTotal(price);
}

function updateTotal(itemPrice) {
    // Get the current total
    var currentTotal = parseFloat(document.getElementById('total').innerText.replace('Rp. ', ''));

    // Update the total
    var newTotal = currentTotal + itemPrice;
    document.getElementById('total').innerText = 'Rp. ' + newTotal.toFixed(3);
}

function updateFooterTotal(itemPrice) {
    // Get the current footer total
    var currentFooterTotal = parseFloat(document.getElementById('footer-total').innerText.replace('Rp. ', ''));

    // Update the footer total
    var newFooterTotal = currentFooterTotal + itemPrice;
    document.getElementById('footer-total').innerText = 'Rp. ' + newFooterTotal.toFixed(3);
}

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener for the search input
    var searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            filterMenuItems(this.value.toLowerCase());
        });
    }
});

function filterMenuItems(searchTerm) {
    // Get all menu items
    var menuItems = document.querySelectorAll('.card');

    // Iterate through each menu item
    menuItems.forEach(function (menuItem) {
        // Get the title of the menu item
        var title = menuItem.querySelector('.card-title').innerText.toLowerCase();

        // Check if the title contains the search term
        if (title.includes(searchTerm)) {
            // If it matches, show the menu item
            menuItem.style.display = 'block';
        } else {
            // If it doesn't match, hide the menu item
            menuItem.style.display = 'none';
        }
    });
}

// JavaScript
function placeOrder() {
    // Get the current total
    var currentFooterTotal = parseFloat(document.getElementById('total').innerText.replace('Rp. ', ''));

    // Display a custom order confirmation alert
    var orderMessage = "===========================================\n";
    orderMessage += "Terimakasih Sudah Berbelanja Di Toko kami!\n";
    orderMessage += "Lanjutkan Pembayaran \n";
    orderMessage += "Di Nomer Rekening Berikut Ini :\n";
    orderMessage += "087817159234 (OJEY-)\n\n";
    orderMessage += "Pembelian Berupa :" 
    orderMessage += "Dengan Total : Rp. " + currentFooterTotal.toFixed(3) + "\n";
    orderMessage += "===========================================";

    alert(orderMessage);

    var thankYouMessage = "Selamat Menikmati & Terimakasi Telah Berbelanja Di Starbhak Mart!";
        alert(thankYouMessage);
    
    // Reset the cart and total
    resetCart();
}


function resetCart() {
    // Remove all items from the cart
    var cartItems = document.getElementById('cart-items');
    while (cartItems.firstChild) {
        cartItems.removeChild(cartItems.firstChild);
    }

    // Reset the total
    document.getElementById('total').innerText = 'Rp. 0.00';
    document.getElementById('footer-total').innerText = 'Rp. 0.00';
}

function updateCartItem(cartItem) {
    var price = parseFloat(cartItem.element.innerText.split(' - ')[1].replace('Rp. ', '').split(' x')[0]);

    // Jumlahkan harga dengan quantity
    var newTotal = price * cartItem.quantity;

    cartItem.element.innerHTML = `<strong>${cartItem.element.querySelector('strong').innerText}</strong> - Rp. ${price.toFixed(3)} x<span class="quantity"> ${cartItem.quantity}</span>`;
}

