
const express = require('express');
require('dotenv/config');
const morgan = require('morgan');
const mongoose = require('mongoose');
  
const app = express();
const api = process.env.API_URL;

app.get(`${api}/candidates`, (req, res) => {
    const candidate = {
        id: 1,
        name: 'Gokul',
        email: 'gokul@gmail.com'
    }
    res.send(candidate);
})

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'rednotice-db'
})
    .then(() => {
        console.log('Database connection is ready..');
    })
    .catch((err) => {
        console.log(err);
    })

app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
})
