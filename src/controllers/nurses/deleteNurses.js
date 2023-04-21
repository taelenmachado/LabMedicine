const Nurses = require('../../models/nurses')

async function deleteNurses (request, response) {

    try {
        const nursesInDatabase = await Nurses.findOne(
            { where: { id: request.params.id } }
        )
        if (!nursesInDatabase) {
            return response
            .status(404)
            .json({message: 'Não existe enfermeiro(a) com esse id'});
        }
        await Nurses.destroy({
            where: {
                id: request.params.id
            }        
        })
       response.status(204).json({ message: 'Enfermeiro(a) deletado com sucesso' })

    } catch (error) {
        response.status(404).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}

module.exports = deleteNurses