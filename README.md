# Mini Documentação - API Back-end

## Descrição
Esta é uma aplicação back-end desenvolvida para criar soluções inovadoras para desafios complexos no universo da tecnologia. O foco principal está no desenvolvimento de sistemas robustos e eficientes utilizando a linguagem de programação JavaScript.

## Versão
1.0.0

## Dependências
- `bcrypt`: Versão 5.1.0
  - Biblioteca para criptografar senhas e dados sensíveis de forma segura.
- `cors`: Versão 2.8.5
  - Permite a configuração de CORS (Cross-Origin Resource Sharing) para lidar com solicitações HTTP de origens diferentes.
- `dotenv`: Versão 16.3.1
  - Carrega variáveis de ambiente a partir de um arquivo `.env` para facilitar a configuração de ambientes.
- `express`: Versão 4.18.2
  - Framework web para Node.js que simplifica o desenvolvimento de aplicativos web e APIs.
- `jsonwebtoken`: Versão 9.0.0
  - Biblioteca para geração e verificação de tokens de autenticação JSON Web Token (JWT).
- `mongoose`: Versão 7.3.0
  - ODM (Object Data Modeling) para MongoDB, permitindo interações com o banco de dados de forma mais fácil e estruturada.
- `morgan`: Versão 1.10.0
  - Middleware para registrar informações de log de requisições HTTP.
- `multer`: Versão 1.4.5-lts.1
  - Middleware para lidar com uploads de arquivos no Node.js.

## Dev Dependencies
- `nodemon`: Versão 2.0.22
  - Utilitário que monitora alterações em arquivos e reinicia automaticamente o servidor Node.js durante o desenvolvimento.

## Engines
- `node`: Versão 18
  - Esta aplicação requer o Node.js na versão 18 ou superior para ser executada corretamente.

## Scripts
- `test`: Utilize este comando para executar testes automatizados (teste de exemplo incluído).
- `dev`: Utilize este comando para executar o servidor em modo de desenvolvimento usando o Nodemon para monitorar alterações em `src/server.js`.
- `start`: Utilize este comando para iniciar o servidor em ambiente de produção.
- `build`: Utilize este comando para instalar dependências específicas do projeto e construir os recursos necessários (adicionar comando real de construção aqui).
- `build-assets`: Utilize este comando para adicionar scripts de construção de ativos (adicionar comando real de construção de ativos aqui).

## Licença
ISC

Este projeto possui uma licença ISC, o que permite que você use, copie, modifique, una, publique, distribua, sublicencie e/ou venda cópias do software, sob certas condições. Para mais detalhes, consulte o arquivo `LICENSE` incluído neste projeto.

## Rotas/APIs

## Rotas/APIs

### `/`
- Método: GET
- Controlador: `publicRouteController.getPublicRoute`
- Descrição: Rota pública que retorna informações públicas sobre a API ou o servidor. Esta rota não requer autenticação.

### `/auth/register`
- Método: POST
- Controlador: `registerUserController.registerUser`
- Descrição: Rota para registrar um novo usuário na aplicação. Os dados necessários para o registro devem ser enviados no corpo da solicitação.

### `/auth/login`
- Método: POST
- Controlador: `loginUserController.loginUser`
- Descrição: Rota para autenticar um usuário na aplicação. Os dados de login devem ser enviados no corpo da solicitação.

### `/user/:id`
- Método: GET
- Controlador: `privateRouteController.privateRoute`
- Descrição: Rota privada que retorna informações do usuário identificado pelo parâmetro `:id`. A autenticação é obrigatória.

### `/user/:id/name`
- Método: PUT
- Controlador: `updateUserController.updateNameUser`
- Descrição: Rota privada para atualizar o nome do usuário identificado pelo parâmetro `:id`. A autenticação é obrigatória.

### `/user/:id/email`
- Método: PUT
- Controlador: `updateUserController.updateEmailUser`
- Descrição: Rota privada para atualizar o e-mail do usuário identificado pelo parâmetro `:id`. A autenticação é obrigatória.

### `/user/:id/password`
- Método: PUT
- Controlador: `updateUserController.updatePasswordUser`
- Descrição: Rota privada para atualizar a senha do usuário identificado pelo parâmetro `:id`. A autenticação é obrigatória.

### `/event`
- Método: POST
- Controlador: `eventController.createEvent`
- Descrição: Rota para criar um novo evento. Os dados do evento devem ser enviados no corpo da solicitação. A autenticação é obrigatória.

### `/event`
- Método: GET
- Controlador: `eventController.getEvents`
- Descrição: Rota para obter todos os eventos cadastrados na aplicação. A autenticação é obrigatória.

### `/event/:id`
- Método: GET
- Controlador: `eventController.getEventById`
- Descrição: Rota para obter informações de um evento específico identificado pelo parâmetro `:id`. A autenticação é obrigatória.

### `/event/:id`
- Método: PATCH
- Controlador: `eventController.updateEventById`
- Descrição: Rota para atualizar as informações de um evento específico identificado pelo parâmetro `:id`. A autenticação é obrigatória.

### `/event/:id`
- Método: DELETE
- Controlador: `eventController.deleteEvent`
- Descrição: Rota para excluir um evento específico identificado pelo parâmetro `:id`. A autenticação é obrigatória.

### `/project`
- Método: POST
- Controlador: `projectController.createProject`
- Descrição: Rota para criar um novo projeto. Os dados do projeto devem ser enviados no corpo da solicitação.

### `/project`
- Método: GET
- Controlador: `projectController.getProjects`
- Descrição: Rota para obter todos os projetos cadastrados na aplicação.

### `/project/:id`
- Método: GET
- Controlador: `projectController.getProjectById`
- Descrição: Rota para obter informações de um projeto específico identificado pelo parâmetro `:id`.

### `/project/:id`
- Método: PATCH
- Controlador: `projectController.updateProjectById`
- Descrição: Rota para atualizar as informações de um projeto específico identificado pelo parâmetro `:id`.

### `/project/:id`
- Método: DELETE
- Controlador: `projectController.deleteProject`
- Descrição: Rota para excluir um projeto específico identificado pelo parâmetro `:id`.

### `/upload`
- Método: POST
- Controlador: `uploadFileController.uploadFileController`
- Descrição: Rota para realizar o upload de um arquivo. Essa rota utiliza o middleware `multer` para lidar com o upload do arquivo, e o parâmetro `file` especifica o nome do campo no qual o arquivo será enviado. A autenticação pode ser obrigatória dependendo dos requisitos da aplicação. O arquivo enviado será armazenado de acordo com as configurações do `multerConfig`.

## Observação
Certifique-se de que possui as dependências listadas acima instaladas e que os scripts estão configurados corretamente antes de executar o projeto. Para instalar as dependências, utilize o comando `npm install` no diretório do projeto.

Caso precise de mais informações ou suporte, entre em contato com o autor deste projeto.

*Atenção:* Esta é uma mini documentação gerada com base nas informações fornecidas no `package.json`. Para uma documentação completa e detalhada do projeto, é importante incluir informações adicionais, como configurações específicas, detalhes sobre autenticação e autorização, entre outros.
