document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('fetch-books').addEventListener('click', fetchBooks);
    document.getElementById('checkout').addEventListener('click', checkout);
});

async function fetchBooks() {
    const query = document.getElementById('list-name').value;
    const apiKey = 'AIzaSyBA-WNCj76NMk0jEbfl467w4OLGLG-K0QU';  // Substitua pela sua chave de API real
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;
console.log(url)

    try {
        console.log('Fetching books from API:', url);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data received from API:', data);

        const books = data.items;
        if (!books) {
            throw new Error('No books found in the API response');
        }

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
