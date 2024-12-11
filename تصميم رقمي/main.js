
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('تم إضافة المنتج إلى السلة!');
    });
});

