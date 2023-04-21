const Nurses = require('../../models/nurses')

async function updateNurses (request, response) {

    try {

        const nursesInDatabase = await Nurses.findByPk(request.params.id)

        if (!nursesInDatabase) {
            return response
                .status(404)
                .json({ message: 'Enfermeiro(a) não encontrado' })
        }

        nursesInDatabase.name = request.body.name
        nursesInDatabase.gender = request.body.gender
        nursesInDatabase.date_of_birth = request.body.date_of_birth
        nursesInDatabase.cpf = request.body.cpf
        nursesInDatabase.contact = request.body.contact
        nursesInDatabase.education_institution = request.body.education_institution, 
        nursesInDatabase.registration_cofen_uf = request.body.registration_cofen_uf,   
                
        await nursesInDatabase.save() //UPDATE

        response.json(nursesInDatabase)

    } catch (error) {
        console.log(error)
        return response
                .status(400)
                .json({ message: 'Dados inválidos' })
    }
}

module.exports = updateNurses