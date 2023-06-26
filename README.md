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

>[!NOTE]
>
> É Importante que as postas ``3000``, ``8082`` e ``27017`` estejam disponíveis para execução do projeto, pois são utilizadas pelo frontend, backend e banco de dados, respectivamente.

>[!IMPORTANT]
>
> Caso o projeto seja executado SEM o Docker, você deve modificar o host do banco de dados no arquivo ``backend/.env`` que por padrão está como ``db`` para ``localhost``.

### Com Docker (Recomendado)

>[!NOTE]
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





