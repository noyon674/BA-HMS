const Appointment = require("../models/appointment.model");

// Home route
const homeController = (req, res) => {
  res.status(200).json({ message: "Welcome to Doctor Appointment API" });
};

// Get all appointments
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      order: [["select_date", "DESC"]],
    });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new appointment
const createAppointment = async (req, res) => {
  const { full_name, doctor_name, select_date, phone_number } = req.body;

  if (!full_name || !doctor_name || !select_date || !phone_number) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const appointment = await Appointment.create({
      full_name,
      doctor_name,
      select_date,
      phone_number,
    });
    res.status(201).json({ message: "Appointment created", appointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  homeController,
  getAppointments,
  createAppointment,
};
