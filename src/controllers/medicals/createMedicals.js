const Medicals = require('../../models/medicals')

async function createMedicals (request, response) {
// #swagger.tags = ['Medico']
// #swagger.description = 'Endpoint para cadastrar médicos.'
    try {
        const medicals = {
            name: request.body.name,
            gender: request.body.gender,
            date_of_birth: request.body.date_of_birth,
            cpf: request.body.cpf,
            contact: request.body.contact,
            education_institution: request.body.education_institution, 
            registration_crm_uf: request.body.registration_crm_uf,   
            clinical_specialization: request.body.clinical_specialization,
            system_status: request.body.system_status,
            attendances: 0
        }

        if (!medicals.name) {
            return validateError(response, 'Nome do médico é obrigatório')
        }
        if (!medicals.cpf) {
            return validateError(response, 'CPF do médico é obrigatório')
        }

        if (!medicals.date_of_birth) {
            return validateError(response, 'Data de nascimento é obrigatório')
        }

        if (!medicals.education_institution) {
            return validateError(response, 'Instituição de ensino é obrigatório')
        }

        if (!medicals.registration_crm_uf) {
            return validateError(response, 'CRM/UF é obrigatório')
        }

        if (!medicals.clinical_specialization) {
            return validateError(response, 'Especialização clinica é obrigatório')
        }
        const specialization = ["Clínico Geral", "Anestesista", "Dermatologia", "Ginecologia", "Neurologia", "Pediatria", "Psiquiatria", "Ortopedia"]
    

        if (!specialization.includes(medicals.clinical_specialization)) {
            return validateError(response, 'Especialização não cadastrada')
        }

        const system_status = ["ATIVO", "INATIVO"]

        if (!system_status.includes(medicals.system_status)) {
            return validateError(response, 'Status inválido')
        }

        const medicalsInDatabase = await Medicals.findOne(
            { where: { cpf: medicals.cpf } }
        )

        if (medicalsInDatabase) {
            return response
            .status(409)
            .json({message: 'Já existe um médico com esse CPF'});
        }

        const newMedicals = await Medicals.create(medicals)

        response.status(201).json(newMedicals)

    } catch (error) {
        console.log(error)
        response.status(400).json({ message: 'Deu erro' })

    }

}
function validateError(response, error) {
    return response
    .status(400)
    .json({ "message": error })
}


module.exports = createMedicals