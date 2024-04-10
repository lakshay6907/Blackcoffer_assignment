// routes/dashboard.js
const router = require('express').Router();
let Dashboard = require('../models/dashboard.model');

// Get all dashboard data
router.route('/').get((req, res) => {
  Dashboard.find()
    .then((dashboard) => res.json(dashboard))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
