const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    pet_name: String,
    pet_type: String,
    owner_name: String,
    owner_phone_number: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Patient', PatientSchema);
