const mongoose = require('mongoose');

const AppointmentSchema = mongoose.Schema({
    start_time: String,
    end_time: String,
    description: String,
    fee: Number,
    feeStatus: String,
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
