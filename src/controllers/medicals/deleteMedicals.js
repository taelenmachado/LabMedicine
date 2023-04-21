const Medicals = require('../../models/medicals')

async function deleteMedicals (request, response) {

    try {
       const medicalsInDatabase = await Medicals.findOne(
            { where: { id: request.params.id } }
        )

        if (!medicalsInDatabase) {
            return response
            .status(404)
            .json({message: 'Não existe um médico com esse id'});
        }
        await Medicals.destroy({
            where: {
                id: request.params.id
            }        
        })
      response.status(204).json({ message: 'Médico(a) deletado com sucesso' })

    } catch (error) {
        response.status(404).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = deleteMedicals