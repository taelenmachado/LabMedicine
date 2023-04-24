const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "LabMedicine API",
        description: "Software de Atendimentos médicos LABMedicine"
    },
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Medico: {
            "name": "Fernando Souza Santos Vieira ",
            "gender": "masculino",
            "date_of_birth": "1959-03-13",
            "cpf": "700.288.991-19",
            "contact": "(48) 99965-7890",
            "education_institution": "UFSP",
            "registration_crm_uf": "CRM SC 58781",
            "clinical_specialization": "Ginecologia",
            "system_status": "Ativo",
            "attendances": 0
        },
        Enfermeiro: {
            "name": "Carlos Silva Santos ",
            "gender": "masculino",
            "date_of_birth": "1994-11-10",
            "cpf": "919.288.390-19",
            "contact": "(31) 99321-7890",
            "education_institution": "Estácio",
            "registration_cofen_uf": "873425-HG-4231"
        },
        Paciente: {
            "name": "Mariana Luiza Teixeira",
            "gender": "feminino",
            "date_of_birth": "2009-06-13",
            "cpf": "132.705.890-19",
            "contact": "(47) 99876-5465",
            "emergency_contact": "(41) 9998-9898",
            "allergy": "dipirona",
            "specific_cautions": "nothing",
            "agreement": "Bradesco",
            "status": "AGUARDANDO_ATENDIMENTO"
        },
        Atendimento: {
            "patient_id": 12,
            "medical_id": 8
        }        
    }
}


const outputFile = './swagger-output.json'
const endpointsFiles = ['./index.js']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
})