import { Router } from 'express';

import { Todo } from '../models/todo';

let todos: Todo[] = [];

const router = Router();

router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
})

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ Message: "Successfully Post Todo" })
})

router.delete('/:id', (req, res, next) => {
    let length = todos.length;
    todos = todos.filter(todoValue => todoValue.id !== req.params.id)
    if (todos.length < length) {
        res.status(200).json({ Message: "Successfully Delete Todo", todos: todos });
    }
    else {
        res.status(404).json({ Error: "Item not found" });
    }
})
router.put('/:id', (req, res, next) => {
    const index = todos.findIndex(todoValue => todoValue.id === req.params.id);
    if (index >= 0) {
        todos[index] = { id: req.params.id, text: req.body.text };
        res.status(200).json({ Message: "Successfully Update Todo", todos: todos });
    }
    else {
        res.status(404).json({ Error: "Item not found" });
    }
})

export default router;