const express = require('express');
const router = express.Router();
const TodosController = require('../controller/todosController');

router.get('/', TodosController.getAll);
router.get('/:id', TodosController.getById);
router.post('/', TodosController.create);
router.delete('/:id', TodosController.delete);

module.exports = router;