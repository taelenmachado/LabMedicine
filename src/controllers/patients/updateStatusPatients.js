const Patients = require('../../models/patients')

async function updateStatus (request, response) {
// #swagger.tags = ['Paciente']
// #swagger.description = 'Endpoint para atualizar o status de atendimento de um paciente.'
    try {

        const statusValido = ["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NÃO_ATENDIDO"]

        if (!statusValido.includes(request.body.status)) {
            return validateError(response, 'Status inválido')
        }
        const patientsInDatabase = await Patients.findByPk(request.params.id)

        if (!patientsInDatabase) {
            return response
                .status(404)
                .json({ message: 'Paciente não encontrado' })
        }

        patientsInDatabase.status = request.body.status

        await patientsInDatabase.save() //UPDATE

        response.json(patientsInDatabase)

    } catch (error) {
        console.log(error)
        return response
                .status(400)
                .json({ message: 'Dados inválidos' })
    }
}

function validateError(response, error) {
    return response
    .status(400)
    .json({ "message": error })
}

module.exports = updateStatus