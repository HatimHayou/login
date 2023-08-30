
document.addEventListener('DOMContentLoaded', function() {

    const addToCartButton = document.querySelector('.add-to-cart-btn');

    addToCartButton.addEventListener('click', function(event) {

        event.preventDefault();

        window.location.href = 'iphone13_checkout.html';
    });
});
