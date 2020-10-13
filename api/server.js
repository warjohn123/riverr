const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useNewUrlParser: true }).then( () => {
    console.log('Connected to database');
}).catch(err => {
    console.log('Could not connect to the database. Exiting now.....', err);
    process.exit();
})

app.use(cors());
app.options('*', cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get('/',(req, res) => {
    res.json({'message': 'Welcome to Riverr API'});
});

require('./app/routes/patient.routes')(app);
require('./app/routes/appointment.routes')(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000');
})