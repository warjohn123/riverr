const { validationResult } = require('express-validator');
const Appointment = require('../models/appointment.model');

exports.create = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).send({errors: errors.mapped()});
    }

    let appointment = new Appointment(req.body);

    appointment.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};

exports.findAll = (req, res) => {
    Appointment.find(req.query).sort({createdAt: 'ascending'}).populate('patient').then( appointment => {
        res.send(appointment);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};

exports.findOne = (req, res) => {
    Appointment.findById(req.params.appointmentId).then(appointment => {
        if(!appointment) {
            return res.status(404).send({
                message: "Appointment not found with id " + req.params.appointmentId
            })
        }
        res.send(appointment);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Appointment not found with id " + req.params.appointmentId
            })
        }
        return res.status(500).send({
            message: 'Error retrieving appointment with id ' + req.params.appointmentId
        })
    })

};

exports.update = (req, res) => {
    Appointment.findByIdAndUpdate(req.params.appointmentId, req.body, {new: true}).then( appointment => {
        res.send(appointment);
    }).catch( err => {
        console.log('err', err);
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Appointment not found with id " + req.params.appointmentId
            });                
        }
        return res.status(500).send({
            message: "Error updating appointment with id " + req.params.appointmentId
        });
    })
};

exports.delete = (req, res) => {
    Appointment.findByIdAndRemove(req.params.appointmentId).then(appointment => {
        if(!appointment) {
            return res.status(404).send({
                message: 'Appointment not found with id ' + req.params.appointmentId
            });
        }
        res.send({message: 'Appointment deleted successfully'});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Appointment not found with id " + req.params.appointmentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete appointment with id " + req.params.appointmentId
        });
    })
};
