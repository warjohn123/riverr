const { validationResult } = require('express-validator');
const Patient = require('../models/patient.model');

exports.create = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).send({errors: errors.mapped()});
    }

    let patient = new Patient(req.body);

    patient.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};

exports.findAll = (req, res) => {
    Patient.find(req.query).sort({createdAt: 'ascending'}).then( patient => {
        res.send(patient);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        })
    })
};

exports.findOne = (req, res) => {
    Patient.findById(req.params.patientId).then(patient => {
        if(!patient) {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            })
        }
        res.send(patient);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            })
        }
        return res.status(500).send({
            message: 'Error retrieving patient with id ' + req.params.patientId
        })
    })

};

exports.update = (req, res) => {
    Patient.findByIdAndUpdate(req.params.patientId, req.body, {new: true}).then( patient => {
        res.send(patient);
    }).catch( err => {
        console.log('err', err);
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Error updating patient with id " + req.params.patientId
        });
    })
};

exports.delete = (req, res) => {
    Patient.findByIdAndRemove(req.params.patientId).then(patient => {
        if(!patient) {
            return res.status(404).send({
                message: 'Patient not found with id ' + req.params.patientId
            });
        }
        res.send({message: 'Patient deleted successfully'});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Patient not found with id " + req.params.patientId
            });                
        }
        return res.status(500).send({
            message: "Could not delete patient with id " + req.params.patientId
        });
    })
};
