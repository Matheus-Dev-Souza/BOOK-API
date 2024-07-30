export async function fetchBooks() {
    const listName = document.getElementById('list-name').value;
    const apiKey = 'AIzaSyBA-WNCj76NMk0jEbfl467w4OLGLG-K0QU';
    const response = await fetch(`https://books.google.com/ebooks?id=buc0AAAAMAAJ&dq=holmes&as_brr=4&source=webstore_bookcard
`);
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
