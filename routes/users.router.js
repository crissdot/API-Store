const express = require('express');

const UsersService = require('../services/users.service.js');

const router = express.Router();
const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const user = service.findOne(id);
    res.json(user);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = service.update(id, body);
    res.json(user);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = service.delete(id);
    res.json(deletedUser);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = router;
