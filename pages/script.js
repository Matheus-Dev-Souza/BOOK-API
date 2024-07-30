document.getElementById('fetch-books').addEventListener('click', fetchBooks);
document.getElementById('checkout').addEventListener('click', checkout);

async function fetchBooks() {
    const listName = document.getElementById('list-name').value;
    const apiKey = 'AIzaSyBA-WNCj76NMk0jEbfl467w4OLGLG-K0QU';
    const query = listName; // Usar o valor selecionado como a consulta
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const books = data.items;

        const bookList = document.getElementById('book-list');
        bookList.innerHTML = '';

        books.forEach(book => {
            const bookInfo = book.volumeInfo;
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${bookInfo.title} by ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author'}</span>
                <button onclick="addToCart('${bookInfo.title}', '${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author'}')">Adicionar ao Carrinho</button>
            `;
            bookList.appendChild(li);
        });
    } catch (error) {
        console.error('Erro:', error);
    }
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
