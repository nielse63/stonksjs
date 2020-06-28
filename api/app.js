const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(cors());
app.use(bodyParser.json());

module.exports = app;
