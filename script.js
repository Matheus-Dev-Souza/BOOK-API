document.getElementById('fetch-books').addEventListener('click', fetchBooks);
document.getElementById('checkout').addEventListener('click', checkout);

async function fetchBooks() {
    const listName = document.getElementById('list-name').value;
    const apiKey = 'c7iPekCAVIoOVGKaBWBMUROiZFiQuyGU';
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${apiKey}`);
    const data = await response.json();
    const books = data.results.books;

    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${book.title} by ${book.author}</span>
            <button onclick="addToCart('${book.title}', '${book.author}')">Adicionar ao Carrinho</button>
        `;
        bookList.appendChild(li);
    });
}

function addToCart(title, author) {
    const cartList = document.getElementById('cart-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${title} by ${author}</span>
        <button onclick="removeFromCart(this)">Remover</button>
    `;
    cartList.appendChild(li);
}

function removeFromCart(button) {
    const li = button.parentElement;
    li.remove();
}

function checkout() {
    alert('Compra finalizada com sucesso!');
}
