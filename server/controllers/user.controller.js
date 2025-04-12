const db = require('../models');
const User = db.User;
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);
  try {
    const hashed = bcrypt.hashSync(password, 8);
    const user = await User.create({ name, email, password: hashed, role });
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
