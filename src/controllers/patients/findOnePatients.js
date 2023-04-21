const Patients = require('../../models/patients')

async function findOnePatients (request, response) {

    try {
        const patientsInDatabase = await Patients.findByPk(request.params.id)

        if (!patientsInDatabase) {
            return response
                .status(404)
                .json({ message: 'Paciente não encontrado com ID informado' })
        }


        response.json(patientsInDatabase)

    } catch (error) {
        console.log(error)
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = findOnePatients