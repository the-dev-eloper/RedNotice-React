
const express = require('express');

const { Candidate } = require('../models/candidate.js');

const candidateRouter = express.Router();

candidateRouter.get(`/`, async (req, res) => {
    const candidateList = await Candidate.find({});
    res.send(candidateList);
});

candidateRouter.post(`/`, async (req, res) => {

    const candidate = new Candidate({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        status: req.body.status,
        date: req.body.date,
        aadhar: req.body.aadhar,
        pan: req.body.pan,
    });

    const createdCandidate = await candidate.save();

    if(createdCandidate) {
        res.status(201).json(createdCandidate)
    } else {
        res.status(500).json({
            error: err,
            success: false
        })
    }
});

module.exports = candidateRouter;
