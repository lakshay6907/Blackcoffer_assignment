const express = require('express');
const router = express.Router();
const Dashboard = require('../models/dashboard.model');

// Fetch all data
router.get('/dashboard', async (req, res) => {
  try {
    const dashboardData = await Dashboard.find();
    console.log('Fetched Data:', dashboardData);
    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;