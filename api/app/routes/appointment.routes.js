module.exports = (app) => {
    const appointment = require('../controllers/appointment.controller.js');

    // Create a new Appointment
    app.post('/appointments', appointment.create);

    // Retrieve all Appointments
    app.get('/appointments', appointment.findAll);

    // Retrieve a single Appointment with appointmentId
    app.get('/appointments/:appointmentId', appointment.findOne);

    // Update a Appointment with appointmentId
    app.put('/appointments/:appointmentId', appointment.update);

    // Delete a Appointment with appointmentId
    app.delete('/appointments/:appointmentId', appointment.delete);
}