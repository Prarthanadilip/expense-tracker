const express = require('express');
const router = express.Router();

// In-memory storage for now
let expenses = [];
let idCounter = 1;

// GET all expenses
router.get('/', (req, res) => {
  res.json(expenses);
});

// POST add new expense
router.post('/', (req, res) => {
  const { title, amount, category } = req.body;
  const newExpense = {
    id: idCounter++,
    title,
    amount,
    category,
    date: new Date()
  };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

// DELETE an expense
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  expenses = expenses.filter(e => e.id !== id);
  res.json({ message: 'Expense deleted' });
});

module.exports = router;