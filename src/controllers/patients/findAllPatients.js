const { where } = require('sequelize')
const Patients = require('../../models/patients')

async function findAllPatients(request, response) {

    try {
        const filter = request.query

        if (filter.status) {
            if (!["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO", "NÃO_ATENDIDO"].includes(filter.status)) {
                return response.json({ message: "O status deve ser: AGUARDANDO_ATENDIMENTO, EM_ATENDIMENTO, ATENDIDO, NÃO_ATENDIDO" })
            }

            const patients = await Patients.findAll(
                {
                    where: {
                        status: filter.status
                    }
                }
            )

            response.json(patients)
        } else {
            const patients = await Patients.findAll()

            response.json(patients)
        }
        
    } catch (error) {
        console.log(error)
        response.status(500).json({ message: 'Não conseguimos processar sua solicitação.' })
    }
}



module.exports = findAllPatients