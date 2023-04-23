/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The title of your book
 *         author:
 *           type: string
 *           description: The book author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the book was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */


const Attendances = require('../../models/attendances')
const Patients = require('../../models/patients')
const Medicals = require('../../models/medicals')


async function createAttendances(request, response) {

    try {

        const patient_id = request.body.patient_id
        const medical_id = request.body.medical_id


        if (!patient_id) {
            return validateError(response, 'ID do paciente é obrigatório')
        }
        if (!medical_id) {
            return validateError(response, 'ID do médico é obrigatório')
        }

        const medicalInDatabase = await Medicals.findOne(
            { where: { id: medical_id } }
        )

        const patientInDatabase = await Patients.findOne(
            { where: { id: patient_id } }
        )

        if (!medicalInDatabase) {
            return response
                .status(404)
                .json({ message: 'Não foi encontrado um médico com esse ID' });
        }

        if (!patientInDatabase) {
            return response
                .status(4094)
                .json({ message: 'Não foi encontrado um paciente com esse ID' });
        }
        patientInDatabase.status = "ATENDIDO"
        patientInDatabase.attendances = patientInDatabase.attendances + 1
        await patientInDatabase.save()

        medicalInDatabase.attendances = medicalInDatabase.attendances + 1
        await medicalInDatabase.save()

        const attendances = {
            patient_id,
            medical_id
        }

        const newAttendance = await Attendances.create(attendances)

        response.status(201).json(newAttendance)

    } catch (error) {
        console.log(error)
        response.status(400).json({ message: 'Deu erro' })

    }

}
function validateError(response, error) {
    return response
        .status(400)
        .json({ "message": error })
}


module.exports = createAttendances
