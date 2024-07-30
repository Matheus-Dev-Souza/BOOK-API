import { fetchBooks } from './fetchBooks.js';
import { checkout } from './cart.js';

document.getElementById('fetch-books').addEventListener('click', fetchBooks);
document.getElementById('checkout').addEventListener('click', checkout);

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
