const express = require('express');
const { home } = require('../controllers/homeController');

const rotas = express.Router();

rotas.get('/', home);

module.exports = rotas;
