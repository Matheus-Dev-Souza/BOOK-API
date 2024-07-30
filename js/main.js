import { fetchBooks } from './api.js';
import { addToCart } from './cart.js';

document.getElementById('fetch-books').addEventListener('click', async () => {
    const listName = document.getElementById('list-name').value;
    const books = await fetchBooks(listName);
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.classList.add('book-item');
        li.innerHTML = `
            <span>${book.title} - ${book.author}</span>
            <button onclick="addToCart({ title: '${book.title}', author: '${book.author}' })">Adicionar ao Carrinho</button>
        `;
        bookList.appendChild(li);
    });
});

document.getElementById('home').addEventListener('click', () => {
    document.getElementById('book-section').classList.remove('hidden');
    document.getElementById('cart-section').classList.add('hidden');
    document.getElementById('login-section').classList.add('hidden');
});

document.getElementById('cart').addEventListener('click', () => {
    document.getElementById('book-section').classList.add('hidden');
    document.getElementById('cart-section').classList.remove('hidden');
    document.getElementById('login-section').classList.add('hidden');
});

document.getElementById('login').addEventListener('click', () => {
    document.getElementById('book-section').classList.add('hidden');
    document.getElementById('cart-section').classList.add('hidden');
    document.getElementById('login-section').classList.remove('hidden');
});
