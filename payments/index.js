const express = require('express');
const app = express();

const payments = require('./payments.js');

app.use('/payments', payments);

app.listen(3000);
