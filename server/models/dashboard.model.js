const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
  end_year: {type: String},
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String},
  url: { type: String },
  region: { type: String},
  start_year: { type: String},
  impact: { type: String },
  added: { type: String},
  published: { type: String},
  country: { type: String},
  relevance: { type: Number},
  pestle: { type: String},
  source: { type: String},
  title: { type: String},
  likelihood: { type: Number},
});

const dashboard = mongoose.model('DashBoard', dashboardSchema, 'jsonData');
module.exports = dashboard;

/* id
66169da0e8bfd07572d4dc07
end_year
""
intensity
6
sector
"Energy"
topic
"oil"
insight
"Annual Energy Outlook"
url
"http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf"
region
"Northern America"
start_year
""
impact
""
added
"January, 20 2017 03:51:24"
published
"January, 09 2017 00:00:00"
country
"United States of America"
relevance
2
pestle
"Industries"
source
"EIA"
title
"Reference case U.S. crude oil production is projected to recover from …"
likelihood
3*/