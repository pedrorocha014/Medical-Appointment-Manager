# Documentation

## Banco de Dados
O banco de dados esta dividido em três partes:
 - `lineDb.json`: Responsável por armazenar informações a respeito das consultas que estão na fila de atendimento.
 - `appoitmentDb.json`: Responsável por armazenar informações a respeito de todas as consultas, em espera, atendidas ou canceladas.
 - `doctorDb.json`: Responsável por armazenar informações a respeito de todos os médicos disponíveis.


## Requests e EndPoints - Médicos
A API possui os seguintes Requests e EndPoints:
 - Request `list doctors` | EndPoint `/doctor/list`: Listar médicos.
 - Request `update doctors` | EndPoint `/doctor/update`: Atualizar dados dos médicos.
 - Request `register doctors` | EndPoint `/doctor/register`: Cadastrar médicos com id, nome e especialidade.
 - Request `delete doctors` | EndPoint `/doctor/delete`: Remover registro do médico.

## Requests e EndPoints - Fila
A API possui os seguintes Requests e EndPoints:
 - Request `treatment done` | EndPoint `/line/attend`: Receber o id de um animal cadastrado para marcar que seu atendimento foi concluído e removê-lo da fila.
 - Request `read line` | EndPoint `/line/list`: Listar todas as consultas do sistema.
 - Request `next treatment` | EndPoint `/line/nextTreatment/:id`: Receber o id de um médico cadastrado e retornar o próximo animal a ser atendido por ele.
 - Request `add to line` | EndPoint `/line/register`: Cadastrar animais com id, nome, espécie, raça, se o atendimento é urgente e especialidade que ele necessita.
 - Request `delete register line` | EndPoint `/line/delete`: Receber id de um animal para cancelar sua consulta e removê-lo da fila.