export function addToCart(title, author) {
    const cartList = document.getElementById('cart-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${title} by ${author}</span>
        <button onclick="removeFromCart(this)">Remover</button>
    `;
    cartList.appendChild(li);
}

export function removeFromCart(button) {
    const li = button.parentElement;
    li.remove();
}

export function checkout() {
    alert('Compra finalizada com sucesso!');
}
