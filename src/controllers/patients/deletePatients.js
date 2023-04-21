const Patients = require('../../models/patients')

async function deletePatients (request, response) {

    try {
         const patientsInDatabase = await Patients.findOne(
            { where: { id: request.params.id } }
        )

        if (!patientsInDatabase) {
            return response
            .status(404)
            .json({message: 'Não existe um paciente com esse id'});
        }
        await Patients.destroy({
            where: {
                id: request.params.id
            }        
        })
       response.status(204).json({ message: 'Paciente deletado com sucesso' })

    } catch (error) {
        response.status(404).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = deletePatients