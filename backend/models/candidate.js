const mongoose = require('mongoose');

const candidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    aadhar: {
        type: Number,
        required: true,
        unique: true
    },
    pan: {
        type: String,
        required: true,
        unique: true
    },
});

candidateSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

candidateSchema.set('toJSON', {
    virtuals: true
});

exports.Candidate = mongoose.model('Candidate', candidateSchema);
