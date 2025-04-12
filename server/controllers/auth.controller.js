const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.User;
require('dotenv').config();

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  // console.log(user);
  // console.log(password);
  // console.log(user.password);
  if (!user || !bcrypt.compareSync(password, user.password))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
  res.json({ token, user });
};
