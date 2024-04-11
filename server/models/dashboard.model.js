const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  intensity: { type: Number, required: true },
  likelihood: { type: Number, required: true },
  relevance: { type: Number, required: true },
  year: { type: Number, required: true },
  country: { type: String, required: true },
  topics: { type: String, required: true },
  region: { type: String, required: true },
  city: { type: String, required: true },
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);
module.exports = Dashboard;