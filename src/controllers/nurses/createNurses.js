const Nurses = require('../../models/nurses')

async function createNurses (request, response) {

    try {
        const nurses = {
            name: request.body.name,
            gender: request.body.gender,
            date_of_birth: request.body.date_of_birth,
            cpf: request.body.cpf,
            contact: request.body.contact,
            education_institution: request.body.education_institution, 
            registration_cofen_uf: request.body.registration_cofen_uf   
        }

        if (!nurses.name) {
            return validateError(response, 'Nome do enfermeiro é obrigatório')
        }
        if (!nurses.cpf) {
            return validateError(response, 'CPF do enfermeiro é obrigatório')
        }

        if (!nurses.date_of_birth) {
            return validateError(response, 'Data de nascimento é obrigatório')
        }

        if (!nurses.education_institution) {
            return validateError(response, 'Instituição de ensino é obrigatório')
        }

        if (!nurses.registration_cofen_uf) {
            return validateError(response, 'COFEN/UF é obrigatório')
        }


        const nursesInDatabase = await Nurses.findOne(
            { where: { cpf: nurses.cpf } }
        )

        if (nursesInDatabase) {
            return response
            .status(409)
            .json({message: 'Já existe um enfermeiro(a) com esse CPF'});
        }

        const newNurses = await Nurses.create(nurses)

        response.status(201).json(newNurses)

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


module.exports = createNurses