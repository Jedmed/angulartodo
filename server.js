const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

const todoController = require('./controllers/todo.js')
app.use('/todo', todoController)

mongoose.connect('mongodb://localhost:27017/josephang', { useNewUrlParser: true});
mongoose.connection.once('open', () => {
  console.log('Connect to mongoose');
})

app.listen(port, () => {
  console.log('Listening to Port: ' + port);
})
