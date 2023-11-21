const router = require('express').Router();
const { LastPage } = require('@mui/icons-material');
const { User } = require('../models');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
  })

    res.json(newUser);
} catch (err) {
  res.json(err);
  }
};

module.exports = {
  createUser,
}