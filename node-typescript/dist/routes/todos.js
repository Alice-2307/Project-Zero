"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ Message: "Successfully Post Todo", todo: newTodo, todos: todos });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    let length = todos.length;
    todos = todos.filter(todoValue => todoValue.id !== params.todoId);
    if (todos.length < length) {
        res.status(200).json({ Message: "Successfully Delete Todo", todos: todos });
    }
    else {
        res.status(404).json({ Error: "Item not found" });
    }
});
router.put('/todo/:todoId', (req, res, next) => {
    const body = req.body;
    const params = req.params;
    const index = todos.findIndex(todoValue => todoValue.id === params.todoId);
    if (index >= 0) {
        todos[index] = { id: params.todoId, text: body.text };
        res.status(200).json({ Message: "Successfully Update Todo", todos: todos });
    }
    else {
        res.status(404).json({ Error: "Item not found" });
    }
});
exports.default = router;
