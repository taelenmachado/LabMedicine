# API de Clinica Médica
Software de Atendimentos médicos LABMedicine

> Projeto desenvolvido usando node, express e sequelize.

A API gerencia dados da rotina de uma equipe clínica armazenando e salvando-os no Banco de Dados, além de comunicar e atualizar o status e número contador do atendimento.

O software realiza o cadastro de usuários do tipo: pacientes, médicos e enfermeiros e possibilita atualizar o status de atendimento médico, se ele está "ativo" ou "inativo", além de dizer se o paciente esta:

- em atendimento
- aguardando atendimento
- atendido
- não atendido

## Objetivo do projeto

O principal objetivo do projeto é armazenar, organizar e utilizar dados pessoais de clientes e funcionários da clinica na elaboração e atualização de registros dos atendimentos clinicos diários.

##### Pré requisitos:
Tecnologias utilizadas

- Postgres
- Node versão 18

 ##### Testando a Aplicação:

Para testar a instalação até o momento:
- adicionar as configurações de banco de dados no arquivo database.js
- executar o comando npm install no seu terminal
- executar o comando npm start no seu terminal
- acessar a documentação através da URL: http://localhost:3333/api-docs/#/


### Melhorias à serem aplicadas:
> 1 - Desenvolvimento de front-end para comunicação com API;

> 2 - Descrição do atendimento relatando prognóstico para tratamentos futuros;

> 3 - Receber feeback ao finalizar o atendimento através de aplicativo;

> 4 - Aplicativo que chama o paciente através de alerta de acordo com a senha recebida;

> 5 - Sistema ligado a aplicativos e tela de chamada de senha;

> 6 - Enfermeiros e médicos receberem uma coluna de avaliações, para que a equipe e o paciente pudesse escolher com base nas experiências dos atendimentos anteriores. 








