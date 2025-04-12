const db = require('../models');
const Patient = db.Patient;
const bcrypt = require('bcryptjs');

exports.createPatient = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);
  try {
    const hashed = bcrypt.hashSync(password, 8);
    const patient = await Patient.create({ name, email, password: hashed, role });
    res.json(patient);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPatients = async (req, res) => {
  const patients = await Patient.findAll();
  res.json( patients);
};
