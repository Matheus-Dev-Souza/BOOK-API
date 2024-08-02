require('dotenv').config();
const express = require('express');
const rotas = require('./routes/route');

const app = express();
app.use(express.static('public')); // Para servir arquivos estáticos como HTML, CSS e JS
app.use(rotas);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server rodando na porta ${process.env.PORT || 3000}`);
});
