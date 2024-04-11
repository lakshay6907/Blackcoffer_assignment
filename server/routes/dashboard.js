const express = require('express');
const router = express.Router();
const Dashboard = require('../models/dashboard.model');

// Fetch data with filters
router.get('/dashboard', async (req, res) => {
  try {
    const { intensity, likelihood, relevance, year, country, topics, region, city } = req.query;
    const filters = {};

    if (intensity) filters.intensity = intensity;
    if (likelihood) filters.likelihood = likelihood;
    if (relevance) filters.relevance = relevance;
    if (year) filters.year = year;
    if (country) filters.country = country;
    if (topics) filters.topics = topics;
    if (region) filters.region = region;
    if (city) filters.city = city;

    const dashboardData = await Dashboard.find(filters);
    res.json(dashboardData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;