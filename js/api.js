const apiKey = 'c7iPekCAVIoOVGKaBWBMUROiZFiQuyGU';
const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/';

async function fetchBooks(listName) {
    try {
        const response = await fetch(`${baseUrl}${listName}.json?api-key=${apiKey}`);
        const data = await response.json();
        return data.results.books;
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        return [];
    }
}
