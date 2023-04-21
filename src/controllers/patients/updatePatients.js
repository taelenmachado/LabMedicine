const Patients = require('../../models/patients')

async function updatePatients (request, response) {

    try {

        const patientsInDatabase = await Patients.findByPk(request.params.id)

        if (!patientsInDatabase) {
            return response
                .status(404)
                .json({ message: 'Paciente não encontrado' })
        }

        patientsInDatabase.name = request.body.name
        patientsInDatabase.gender = request.body.gender
        patientsInDatabase.date_of_birth = request.body.date_of_birth
        patientsInDatabase.cpf = request.body.cpf
        patientsInDatabase.contact = request.body.contact
        patientsInDatabase.emergency_contact = request.body.emergency_contact
        patientsInDatabase.allergy = request.body.allergy
        patientsInDatabase.specific_cautions = request.body.specific_cautions
        patientsInDatabase.agreement = request.body.agreement

        await patientsInDatabase.save() //UPDATE

        response.json(patientsInDatabase)

    } catch (error) {
        console.log(error)
        return response
                .status(400)
                .json({ message: 'Dados inválidos' })
    }
}

module.exports = updatePatients