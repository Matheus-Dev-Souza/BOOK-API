document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'c7iPekCAVIoOVGKaBWBMUROiZFiQuyGU';
    const bookList = document.getElementById('book-list');
    const cartList = document.getElementById('cart-list');
    let cart = [];
    let currentUser = null;

    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            const listName = button.getAttribute('data-category');
            fetchBooks(listName);
        });
    });

    function fetchBooks(listName) {
        const url = `https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayBooks(data.results.books);
            })
            .catch(error => {
                console.error('Erro ao buscar livros:', error);
            });
    }

    function displayBooks(books) {
        bookList.innerHTML = '';
        books.forEach(book => {
            const bookItem = document.createElement('li');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>Autor: ${book.author}</p>
                <p>Descrição: ${book.description}</p>
                <p>Data de Publicação: ${book.published_date}</p>
                <button class="add-to-cart" data-title="${book.title}">Adicionar ao Carrinho</button>
            `;
            bookList.appendChild(bookItem);
        });
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const title = button.getAttribute('data-title');
                addToCart(title);
            });
        });
    }

    function addToCart(title) {
        cart.push(title);
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <h3>${item}</h3>
                <button class="remove-from-cart" data-index="${index}">Remover</button>
            `;
            cartList.appendChild(cartItem);
        });
        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const index = button.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('O carrinho está vazio!');
        } else if (!currentUser) {
            alert('Você precisa estar logado para finalizar a compra!');
        } else {
            alert(`Compra finalizada com sucesso por ${currentUser}!`);
            cart = [];
            updateCart();
        }
    });

    // Login/Register
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const loginSubmit = document.getElementById('login-submit');
    const registerSubmit = document.getElementById('register-submit');
    const userInfo = document.getElementById('user-info');
    const userNameDisplay = document.getElementById('user-name');

    loginBtn.onclick = () => {
        loginModal.style.display = 'block';
    }

    registerBtn.onclick = () => {
        registerModal.style.display = 'block';
    }

    logoutBtn.onclick = () => {
        currentUser = null;
        userInfo.style.display = 'none';
        document.getElementById('login-register').style.display = 'block';
    }

    document.querySelectorAll('.close').forEach(span => {
        span.onclick = () => {
            loginModal.style.display = 'none';
            registerModal.style.display = 'none';
        }
    });

    loginSubmit.onclick = () => {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        // Simulação de autenticação
        if (username && password) {
            currentUser = username;
            loginModal.style.display = 'none';
            userInfo.style.display = 'block';
            document.getElementById('login-register').style.display = 'none';
            userNameDisplay.textContent = currentUser;
        } else {
            alert('Preencha todos os campos!');
        }
    }

    registerSubmit.onclick = () => {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        // Simulação de registro
        if (username && password) {
            alert('Registrado com sucesso!');
            registerModal.style.display = 'none';
        } else {
            alert('Preencha todos os campos!');
        }
    }

    window.onclick = function(event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    }
});
