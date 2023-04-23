const Patients = require('../../models/patients')

async function createPatients(request, response) {

    try {
        const patients = {
            name: request.body.name,
            gender: request.body.gender,
            date_of_birth: request.body.date_of_birth,
            cpf: request.body.cpf,
            contact: request.body.contact,
            emergency_contact: request.body.emergency_contact,
            allergy: request.body.allergy,
            specific_cautions: request.body.specific_cautions,
            agreement: request.body.agreement,
            status: request.body.status,
            attendances: 0
        }

        if (!patients.name) {
            return validateError(response, 'Nome é obrigatório')
        }

        if (!patients.date_of_birth) {
            return validateError(response, 'Data de nascimento é obrigatório')
        }

        if (!patients.emergency_contact) {
            return validateError(response, 'Contato de emergencia é obrigatório')
        }

        const statusValido = ["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NÃO_ATENDIDO"]

        if (!statusValido.includes(patients.status)) {
            return validateError(response, 'Status inválido')
        }

        const patientsInDatabase = await Patients.findOne(
            { where: { cpf: patients.cpf } }
        )

        if (patientsInDatabase) {
            return response
            .status(409)
            .json({message: 'Já existe um paciente com esse CPF'});
        }

        const newPatients = await Patients.create(patients)

        response.status(201).json(newPatients)

    } catch (error) {
        console.log(error)
        response.status(500).json({ message: 'Deu erro' })

    }

}

function validateError(response, error) {
    return response
    .status(400)
    .json({ "message": error })
}

module.exports = createPatients