
const express = require('express');
const mongoose = require('mongoose');
const { Candidate } = require('../models/candidate.js');

const candidateRouter = express.Router();

candidateRouter.get(`/`, async (req, res) => {
    const candidateList = await Candidate.find({});
    res.send(candidateList);
});

candidateRouter.get(`/:id`, async (req, res) => {
    const candidate = await Candidate.findById(req.params.id);
    res.send(candidate);
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

candidateRouter.put(`/:id`, async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid Candidate Id');
    }

    const candidate = await Candidate.findById(req.params.id);
    if(!candidate) return res.status(400).send('Invalid Candidate');

    const updatedCandidate = await Candidate.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            status: req.body.status,
            date: req.body.date,
            aadhar: req.body.aadhar,
            pan: req.body.pan,
        },
        { new: true }
    );

    if(!updatedCandidate) {
        return res.status(400).send('Candidate not Found!')
    }

    res.send(updatedCandidate);
});

candidateRouter.delete(`/:id`, (req, res) => {

    Candidate.findByIdAndRemove(req.params.id)
        .then((deletedCandidate) => {
            if(deletedCandidate) {
                return res.status(201).json({ success: true, message: 'Deleted Successfully' })
            } else {
                return res.status(404).json({ success: false, message: 'Candidate not found' })
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err })
        })
});

module.exports = candidateRouter;
