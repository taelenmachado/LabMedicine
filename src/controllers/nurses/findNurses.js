const Nurses = require('../../models/nurses')

async function findNurses (request, response) {

    try {

        const nurses = await Nurses.findAll(request.params.id)

        response.json(nurses)

    } catch (error) {
        console.log(error)
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = findNurses