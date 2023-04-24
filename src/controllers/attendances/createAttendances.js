const Attendances = require('../../models/attendances')
const Patients = require('../../models/patients')
const Medicals = require('../../models/medicals')

async function createAttendances(request, response) {
// #swagger.tags = ['Atendimento']
// #swagger.description = 'Endpoint para criar atendimento médico.'

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
