// controllers/staff.controller.js

const db = require("../models");
const Staff = db.staff; // Use capitalized model reference for consistency

// Create a new staff member
const createStaff = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  // Validate input
  if (!firstName || !lastName || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create the staff record
    const newStaff = await Staff.create({
      firstName,
      lastName,
      email
    });

    res.status(201).json({
      message: "Staff member created successfully",
      staff: newStaff
    });
  } catch (err) {
    console.error("Error creating staff:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createStaff
};
