document.getElementById('fetch-books').addEventListener('click', () => {
    const listName = document.getElementById('list-name').value;
    const apiKey = 'chaveapi'; // Substitua pela sua chave de API real
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Verifica a estrutura da resposta
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = ''; // Limpa a lista antes de adicionar novos itens

            if (data.results && data.results.books) {
                data.results.books.forEach(book => {
                    const listItem = document.createElement('li');
                    listItem.classList.add('book-item');

                    listItem.innerHTML = `
                        <h3>${book.title}</h3>
                        <p><strong>Autor:</strong> ${book.author}</p>
                        <p><strong>Rank:</strong> ${book.rank}</p>
                        <p><strong>Semanas na Lista:</strong> ${book.weeks_on_list}</p>
                        <p><strong>Descrição:</strong> ${book.description}</p>
                        <a href="${book.amazon_product_url}" target="_blank">Comprar na Amazon</a>
                    `;

                    if (book.book_image) {
                        const img = document.createElement('img');
                        img.src = book.book_image;
                        listItem.appendChild(img);
                    }

                    bookList.appendChild(listItem);
                });
            } else {
                bookList.innerHTML = '<p>Nenhum livro encontrado.</p>';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar livros:', error);
        });
});
