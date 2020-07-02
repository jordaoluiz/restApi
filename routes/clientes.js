const express = require('express');
const app = express();
const clientesController = require('../controller/clientesController')


app.get('/', clientesController.getAll)

module.exports = app