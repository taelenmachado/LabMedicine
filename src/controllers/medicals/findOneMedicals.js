const Medicals = require('../../models/medicals')

async function findOneMedicals (request, response) {
// #swagger.tags = ['Medico']
// #swagger.description = 'Endpoint para buscar um médico.'
    try {
        const medicalsInDatabase = await Medicals.findByPk(request.params.id)

        if (!medicalsInDatabase) {
            return response
                .status(404)
                .json({ message: 'Médico não encontrado com ID informado' })
        }


        response.json(medicalsInDatabase)

    } catch (error) {
        console.log(error)
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = findOneMedicals