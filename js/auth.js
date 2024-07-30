document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Aqui você pode adicionar a lógica de autenticação
    alert(`Login realizado com sucesso para o usuário ${username}`);
});
