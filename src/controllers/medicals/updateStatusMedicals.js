const Medicals = require('../../models/medicals')

async function updateStatusMedicals (request, response) {

    try {

        if (!system_status.includes(request.body.system_status)) {
            return validateError(response, 'Status inválido')
        }
        const medicalsInDatabase = await Medicals.findByPk(request.params.id)

        if (!medicalsInDatabase) {
            return response
            .status(404)
            .json({ message: 'Médico(a) não encontrado' })
        }

        medicalsInDatabase.system_status = request.body.system_status

        await medicalsInDatabase.save() //UPDATE

        response.json(medicalsInDatabase)

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

module.exports = updateStatusMedicals