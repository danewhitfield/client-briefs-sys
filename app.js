const express = require('express');
const app = express();
const cors = require('cors');

const briefsRouter = require('./routes/brief-router');

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CLIENTS
app.use(briefsRouter);

module.exports = app;
