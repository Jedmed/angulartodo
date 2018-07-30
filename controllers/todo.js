const express = require('express');
const router = express.Router();
const Todos = require('../models/todo.js');

router.get('/', (req, res) => {
  Todos.find({}, (err, data) => {
    res.json(data);
  })
})

router.delete('/:id', (req, res) => {
  Todos.findByIdAndRemove(req.params.id, (err, data) => {
    res.json(data);
  })
})

router.post('/', (req, res) => {
  Todos.create(req.body, (err, data) => {
    res.json(data);
  })
})

router.put('/:id', (req, res) => {
  Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
    res.json(data);
  })
})

module.exports = router;
