let cart = [];

function addToCart(book) {
    cart.push(book);
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    cart.forEach(book => {
        const li = document.createElement('li');
        li.classList.add('book-item');
        li.innerHTML = `
            <span>${book.title} - ${book.author}</span>
            <button onclick="removeFromCart('${book.title}')">Remover</button>
        `;
        cartList.appendChild(li);
    });
}

function removeFromCart(title) {
    cart = cart.filter(book => book.title !== title);
    updateCartUI();
}

document.getElementById('checkout').addEventListener('click', () => {
    alert('Compra finalizada!');
    cart = [];
    updateCartUI();
});
