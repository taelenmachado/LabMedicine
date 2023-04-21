const Medicals = require('../../models/medicals')

async function findAllMedicals (request, response) {

    try {
        const query = buildQuery(request.query.status);
        const medicals = await Medicals.findAll(query)

        response.json(medicals)

    } catch (error) {
        console.log(error)
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

function buildQuery(system_status) {
    if (system_status) {
        return {
            where: {
                system_status: system_status
            }
        }
    }
    return {}
}

module.exports = findAllMedicals