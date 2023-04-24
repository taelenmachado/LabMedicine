const Medicals = require('../../models/medicals')

async function updateMedicals (request, response) {
// #swagger.tags = ['Medico']
// #swagger.description = 'Endpoint para atualizar dados do médico.'
    try {

        const medicalsInDatabase = await Medicals.findByPk(request.params.id)

        if (!medicalsInDatabase) {
            return response
                .status(404)
                .json({ message: 'Médico(a) não encontrado' })
        }

        medicalsInDatabase.name = request.body.name
        medicalsInDatabase.gender = request.body.gender
        medicalsInDatabase.date_of_birth = request.body.date_of_birth
        medicalsInDatabase.cpf = request.body.cpf
        medicalsInDatabase.contact = request.body.contact
        medicalsInDatabase.education_institution = request.body.education_institution, 
        medicalsInDatabase.registration_crm_uf = request.body.registration_crm_uf,   
        medicalsInDatabase.clinical_specialization = request.body.clinical_specialization,
        medicalsInDatabase.system_status = request.body.system_status,
        
        await medicalsInDatabase.save() //UPDATE

        response.json(medicalsInDatabase)

    } catch (error) {
        console.log(error)
        return response
                .status(400)
                .json({ message: 'Dados inválidos' })
    }
}

module.exports = updateMedicals