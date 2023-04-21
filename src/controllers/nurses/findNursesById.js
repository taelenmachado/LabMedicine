const Nurses = require('../../models/nurses')

async function findNursesById (request, response) {

    try {
        const nursesInDatabase = await Nurses.findByPk(request.params.id)

        if (!nursesInDatabase) {
            return response
                .status(404)
                .json({ message: 'Enfermeiro(a) não encontrado com ID informado' })
        }


        response.json(nursesInDatabase)

    } catch (error) {
        console.log(error)
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = findNursesById