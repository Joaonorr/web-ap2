# web-ap2

## Descrição do projeto

Projeto desenvolvido para a disciplina de Desenvolvimento Web, com o objetivo de criar um sistema de cadastro de alunos, utilizando a biblioteca ``ReactJS`` para o frontend e o framework ``ExpressJS`` para o backend.

## Arquitetura do projeto

```shell
├───Backend
│   └───src
│       ├───config
│       ├───Controllers
│       ├───models
│       └───Routes
└───frontend
    ├───public
    └───src
        └───components
            └───Alunos            
```

Onde:

- ``Backend``: Contém o código do backend do projeto.
    - ``src``: Contém o código fonte do backend.
        - ``config``: Contém o arquivo de configuração do banco de dados.
        - ``Controllers``: Contém os controladores da aplicação.
        - ``models``: Contém os modelos da aplicação.
        - ``Routes``: Contém as rotas da aplicação.

- ``frontend``: Contém o código do frontend do projeto.
    - ``public``: Contém os arquivos públicos do frontend.
    - ``src``: Contém o código fonte do frontend.
        - ``components``: Contém os componentes da aplicação.
            - ``Alunos``: Contém os componentes da página de alunos.

---

## Como executar o projeto

> **Note**
>
> É Importante que as postas ``3000``, ``8082`` e ``27017`` estejam disponíveis para execução do projeto, pois são utilizadas pelo frontend, backend e banco de dados, respectivamente.

> **Warning**
>
> Caso o projeto seja executado SEM o Docker, você deve modificar o host do banco de dados no arquivo ``backend/.env`` que por padrão está como ``db`` para ``localhost``.

### Com Docker (Recomendado)

> **Note**
>
> É necessário ter o Docker instalado na máquina para executar o projeto.

- Para executar o projeto com o Docker, basta executar o comando ``docker-compose up`` na raiz do projeto.

### Com NodeJS

- Na raiz do projeto, execute os seguintes comandos:

    - ``cd backend``: Entra na pasta do backend.
    - ``npm install``: Instala as dependências do backend.
    - ``npm start``: Inicia o backend.

- Em outro terminal, execute os seguintes comandos:

    - ``cd frontend``: Entra na pasta do frontend.
    - ``npm install``: Instala as dependências do frontend.
    - ``npm start``: Inicia o frontend.


### Com Yarn

- Na raiz do projeto, execute os seguintes comandos:

    - ``cd backend``: Entra na pasta do backend.
    - ``yarn``: Instala as dependências do backend.
    - ``yarn start``: Inicia o backend.

Em outro terminal, execute os seguintes comandos:

- ``cd frontend``: Entra na pasta do frontend.
- ``yarn``: Instala as dependências do frontend.
- ``yarn start``: Inicia o frontend.


---

## Rotas da aplicação

### URL Base: ``http://localhost:8082/api/v1/``

### Alunos

<!-- | Método | Rota | Query Params | Body | Descrição |
| --- | --- | --- | --- | --- |
| <p style="color:MediumSeaGreen;">GET</p> | /alunos | - | - | Retorna todos os alunos cadastrados. |
| <p style="color:MediumSeaGreen;">GET</p> | /alunos/:id | id | - | Retorna o aluno com o id informado. |
| <p style="color:Orange;">POST</p> | /alunos | - | ``{ nome: string, curso: string, ira: int }`` | Cadastra um novo aluno. |
| <p style="color:DodgerBlue;">PUT</p> | /alunos/:id | id | ``{ nome: string, curso: string, ira: int }`` | Atualiza os dados do aluno com o id informado. |
| <p style="color:Tomato;">DELETE</p> | /alunos/:id | id | - | Deleta o aluno com o id informado. | -->


<table style="border-collapse: collapse; width: 100%;">
        <tr>
            <th style="text-align: center; padding: 8px; background-color: #f2f2f2; color:black">Método</th>
            <th style="text-align: center; padding: 8px; background-color: #f2f2f2; color:black">Rota</th>
            <th style="text-align: center; padding: 8px; background-color: #f2f2f2; color:black">Query Params</th>
            <th style="text-align: center; padding: 8px; background-color: #f2f2f2; color:black">Body</th>
            <th style="text-align: center; padding: 8px; background-color: #f2f2f2; color:black">Descrição</th>
        </tr>
        <tr>
            <td style="text-align: center; padding: 8px; color: MediumSeaGreen;">GET</td>
            <td style="text-align: center; padding: 8px;">/alunos</td>
            <td style="text-align: center; padding: 8px;">-</td>
            <td style="text-align: center; padding: 8px;">-</td>
            <td style="text-align: center; padding: 8px;">Retorna todos os alunos cadastrados.</td>
        </tr>
        <tr>
            <td style="text-align: center; padding: 8px; color: MediumSeaGreen;">GET</td>
            <td style="text-align: center; padding: 8px;">/alunos/:id</td>
            <td style="text-align: center; padding: 8px;">id</td>
            <td style="text-align: center; padding: 8px;">-</td>
            <td style="text-align: center; padding: 8px;">Retorna o aluno com o id informado.</td>
        </tr>
        <tr>
            <td style="text-align: center; padding: 8px; color: Orange;">POST</td>
            <td style="text-align: center; padding: 8px;">/alunos</td>
            <td style="text-align: center; padding: 8px;">-</td>
            <td style="text-align: center; padding: 8px;">{ nome: string, curso: string, ira: int }</td>
            <td style="text-align: center; padding: 8px;">Cadastra um novo aluno.</td>
        </tr>
        <tr>
            <td style="text-align: center; padding: 8px; color: DodgerBlue;">PUT</td>
            <td style="text-align: center; padding: 8px;">/alunos/:id</td>
            <td style="text-align: center; padding: 8px;">id</td>
            <td style="text-align: center; padding: 8px;">{ nome: string, curso: string, ira: int }</td>
            <td style="text-align: center; padding: 8px;">Atualiza os dados do aluno com o id informado.</td>
        </tr>
        <tr>
            <td style="text-align: center; padding: 8px; color: Tomato;">DELETE</td>
            <td style="text-align: center; padding: 8px;">/alunos/:id</td>
            <td style="text-align: center; padding: 8px;">id</td>
            <td style="text-align: center; padding: 8px;">-</td>
            <td style="text-align: center; padding: 8px;">Deleta o aluno com o id informado.</td>
        </tr>
    </table>
</body>

