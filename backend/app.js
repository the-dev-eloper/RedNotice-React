
const express = require('express');
require('dotenv/config');

const app = express();
const api = process.env.API_URL;

app.get('/', (req, res) => {
    res.send('ssssss');
})

app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
})