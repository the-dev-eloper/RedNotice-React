
const express = require('express');
require('dotenv/config');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const api = process.env.API_URL;

app.use(cors());
app.options('*', cors())

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Routes
const candidateRouter = require('./routes/candidate');

app.use(`${api}/candidates`, candidateRouter);

// Database
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

// Server
app.listen(3000, () => {
    console.log('server is running http://localhost:3000');
})
