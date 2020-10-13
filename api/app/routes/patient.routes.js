module.exports = (app) => {
    const patient = require('../controllers/patient.controller.js');

    // Create a new Patient
    app.post('/patients', patient.create);

    // Retrieve all Patients
    app.get('/patients', patient.findAll);

    // Retrieve a single Patient with patientId
    app.get('/patients/:patientId', patient.findOne);

    // Update a Patient with patientId
    app.put('/patients/:patientId', patient.update);

    // Delete a Patient with patientId
    app.delete('/patients/:patientId', patient.delete);
}