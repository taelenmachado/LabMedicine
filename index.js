require('dotenv').config()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger-output.json')

const express = require('express');

const app = express()

const connection = require('./src/database');

app.use(express.json())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

connection.authenticate()
connection.sync({ alter: true })
console.log('Connection has been established successfully.');

const createPatients = require('./src/controllers/patients/createPatients');
const updatePatients = require('./src/controllers/patients/updatePatients');
const updateStatus = require('./src/controllers/patients/updateStatusPatients');
const findAllPatients = require('./src/controllers/patients/findAllPatients');
const findOnePatients = require('./src/controllers/patients/findOnePatients');
const deletePatients = require('./src/controllers/patients/deletePatients');

const createMedicals = require('./src/controllers/medicals/createMedicals');
const updateMedicals = require('./src/controllers/medicals/updateMedicals');
const findAllMedicals = require('./src/controllers/medicals/findAllMedicals');
const findOneMedicals = require('./src/controllers/medicals/findOneMedicals');

const updateStatusMedicals = require('./src/controllers/medicals/updateStatusMedicals');
const deleteMedicals = require('./src/controllers/medicals/deleteMedicals');

const createNurses = require('./src/controllers/nurses/createNurses');
const updateNurses = require('./src/controllers/nurses/updateNurses');
const deleteNurses = require('./src/controllers/nurses/deleteNurses');
const findNursesById = require('./src/controllers/nurses/findNursesById');
const findNurses = require('./src/controllers/nurses/findNurses');

const createAttendances = require('./src/controllers/attendances/createAttendances')

app.post('/api/patients', createPatients)
app.delete('/api/patients/:id', deletePatients)
app.put('/api/patients/:id', updatePatients)
app.put('/api/patients/:id/status', updateStatus)
app.get('/api/patients', findAllPatients)
app.get('/api/patients/:id', findOnePatients)

app.post('/api/medicals', createMedicals)
app.delete('/api/medicals/:id', deleteMedicals)
app.put('/api/medicals/:id', updateMedicals)
app.put('/api/medicals/:id/status', updateStatusMedicals)
app.get('/api/medicals', findAllMedicals)
app.get('/api/medicals/:id', findOneMedicals)

app.post('/api/nurses', createNurses)
app.put('/api/nurses/:id', updateNurses)
app.delete('/api/nurses/:id', deleteNurses)
app.get('/api/nurses/:id', findNursesById)
app.get('/api/nurses', findNurses)

app.post('/api/attendances', createAttendances)

app.listen(3333, () => console.log('LabMedicine online! \nAPI documentation: http://localhost:3333/doc'))
