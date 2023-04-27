<a name="readme-top"></a>

<h1 align="center">Projeto Car Shop :car: :motorcycle:</h1>

## Sumário

  <ol>
    <li><a href="#descricao">Sobre o Projeto</a></li>
    <li><a href="#tecnologias">Tecnologias</a></li>
    <li><a href="#funcionalidades">Funcionalidades</a></li>
    <li><a href="#como-executar-o-projeto">Como Executar o Projeto</a></li>
    <li><a href="#endpoints">Endpoints</a></li>    
    <li><a href="#contato">Contato</a></li>
  </ol>

## Descrição

Olá, seja bem vindo ao README do projeto Car Shop API.  

Neste projeto, foi desenvolvida uma API para gerenciamento de uma concessionária de veículos, que possui carros e motos e permite realizar as operações de criação, visualização, atualização e deleção (CRUD) dos carros e motos cadastrados.

Utilizei Node.js e TypeScript para desenvolver a aplicação e escolhi o MongoDB como banco de dados. Para a conexão com o banco, optei pelo framework Mongoose, que é um ODM (Object-Document Mapping) que facilita as interações com o MongoDB e especialmente as operaçõse de CRUD.

Apliquei princípios importantes de desenvolvimento de software, como POO (Programação Orientada a Objetos), SOLID e DDD (Domain Driven Design), com o objetivo de garantir a qualidade do código e tornar a aplicação mais escalável e performática.

Além disso, criei testes unitários utilizando a abordagem BDD (Behavior-driven development) para assegurar que o código funcione adequadamente. Com esse processo, a aplicação fica sempre em bom estado e pronta para receber atualizações e features.

## Tecnologias

<details>
  <summary><strong>Desenvolvimento</strong></summary>
  
- [Docker][docker-url]
- [dotenv][dotenv-url]
- [Express][express-url]
- [Node.js][node-url]
- [MongoDB][mongodb-url]
- [Mongoose][mongoose-url]
- [Typescript][typescript-url]

---

</details>

<details>
  <summary><strong>Testes</strong></summary>

- [Chai][chai-url]
- [Mocha][mocha-url]
- [Sinon.js][sinon-url]

---

</details>

<details>
  <summary><strong>Alinhamento e qualidade de código</strong></summary>

- [ESLint][eslint-url]

---

</details>

## Funcionalidades

Realizar operações de CRUD com o banco de dados. Internamente o Código trabalha com a objetos e utiliza os principios do POO (Abstração, Encapsulamento, Herança e Polimorfismo).

<ul>
  <li>Criar, listar, atualizar e deletar carros.</li>
  <li>Criar, listar, atualizar e deletar motos.</li>
</ul>

## Como Executar o Projeto

Para rodar o projeto, siga os passos abaixo.

1. Clone o repositório;

```
git clone git@github.com:HeitorCTrindade/car-shop-api.git
```

2. Navegue até a raiz do projeto;

```
cd blogs-api/
```

> ⚠️ Agora, decida se o projeto será rodado localmente ou via Docker.
<details>
  <summary><strong>💽 Localmente</strong></summary>

1. Certifique-se que você tenha o **node** instalado na versão 16 ou superior. Confira [aqui](https://nodejs.org/pt-br/download/package-manager/) a documentação oficial.

2. Na raiz do projeto, instale as dependências do projeto.

```
npm install
```

3. Configure a variável de ambiente:

- Abra o arquivo `.env` (disponível na raíz do projeto);
- Configure as variável de ambiente `MONGO_DB_URL` com porta para o seu banco mongoDB no contexto local.

4. Para iniciar o servidor da sua API, utilize o comando abaixo.

```
npm run dev
```

- 🧪Para executar os testes, você pode utilizar os dois comandos abaixo.🧪

```
// Comando 1
npm run test:mocha
// Comando 2 - Neste comando você tem acesso à cobertura dos testes
npm run test:coverage
```
</details>

<details>
  <summary><strong>🐋 Docker</strong></summary>
  
1. Certifique-se que você tenha o **docker-compose** instalado na versão 1.29 ou superior. Links oportunos caso você precise instalar ou atualizar: [Tutorial DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) e [documentação oficial](https://docs.docker.com/compose/install/);

2. Suba os containers executando o comando abaixo. Dois containers serão inicializados: `car_shop` (node) e `car_shop_db` (mysql).

```
docker-compose up -d
```

3. Acesse a CLI do container `car_shop` com o comando abaixo ou abra-o no VS Code. Para a última opção, recomendo a extensão da Microsoft [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

```
docker exec -it car_shop bash
```

> ⚠️ A partir de agora, **TODOS** os comandos (scripts) disponíveis no `package.json` (incluindo o npm install) devem ser executados **DENTRO** do container `car_shop`.
4. Instale as dependências do projeto.

```
npm install
```

5. Para iniciar o servidor, utilize um dos comandos abaixo.

```
npm run dev
```

- Para executar os testes, você pode utilizar os dois comandos abaixo.

```
// Comando 1
npm run test:mocha
// Comando 2 - Neste comando você tem acesso à cobertura dos testes
npm run test:coverage
```

- 🧪Para o contexto de teste local, configure a variável de ambiente:🧪

1. Abra o arquivo `.env` (disponível na raíz do projeto);
2. Configure as variável de ambiente `MONGO_DB_URL` com porta para o seu banco mongoDB no contexto local.

</details>

## Endpoints

> ℹ️ Para todos os endpoints que exijam o id dos carros e motos, atente-se que o id é um `ObjectId`. Saiba mais sobre ObjectId [aqui](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid).
<details>
  <summary><strong>Cars</strong></summary>

### GET /cars

- Retorna todos os carros registrados no banco de dados.
- URL: `http://localhost:PORT/cars`

### POST /cars

- Adiciona um novo carro ao banco de dados.
- URL: `http://localhost:PORT/cars`
- O corpo da requisição deve seguir o formato abaixo:

```
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true, // Não é obrigatório. Se não for inserido, o valor do status será 'false'
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

### GET /cars/:id

- Retorna o carro cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`

### PUT /cars/:id

- Atualiza o carro cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`
- O corpo da requisição deve seguir o formato abaixo:

```
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true, // Não é obrigatório. Se não for inserido, o valor do status será 'false'
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

### DELETE /cars/:id

- Remove do banco de dados o carro cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/cars/634852326b35b59438fbea2f`

---

</details>

<details>
  <summary><strong>Motorcycles</strong></summary>

### GET /motorcycles

- Retorna todas as motos registradas no banco de dados.
- URL: `http://localhost:PORT/motorcycles`

### POST /motorcycles

- Adiciona uma nova moto ao banco de dados.
- URL: `http://localhost:PORT/motorcycles`
- O corpo da requisição deve seguir o formato abaixo:

```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true, // Não é obrigatório. Se não for inserido, o valor do status será 'false'
  "buyValue": 30.000,
  "category": "Street", // Valores aceitos: "Street", "Custom" ou "Trail"
  "engineCapacity": 600
}
```

### GET /motorcycles/:id

- Retorna a moto cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`

### PUT /motorcycles/:id

- Atualiza a moto cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`
- O corpo da requisição deve seguir o formato abaixo:

```
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true, // Não é obrigatório. Se não for inserido, o valor do status será 'false'
  "buyValue": 45.000,
  "category": "Street", // Valores aceitos: "Street", "Custom" ou "Trail"
  "engineCapacity": 600
}
```

### DELETE /motorcycles/:id

- Remove do banco de dados a moto cujo id foi passado na URL.
- Exemplo de URL: `http://localhost:PORT/motorcycles/634852326b35b59438fbea2f`

---

</details>

## Contato
Projeto desenvolvido por Heitor C. Trindade :robot:.

[![Gmail][gmail-badge]][gmail-url] [![Linkedin][linkedin-badge]][linkedin-url] [![GitHub][github-badge]][github-url]

<!-- MARKDOWN LINKS & IMAGES -->
[gmail-badge]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[gmail-url]: mailto:heitorct.dev@gmail.com
[linkedin-badge]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/heitor-catarino-trindade
[github-badge]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[github-url]: https://github.com/HeitorCTrindade/
[chai-url]: https://www.chaijs.com/
[docker-url]: https://www.docker.com/
[dotenv-url]: https://www.dotenv.org/
[eslint-url]: https://eslint.org/
[express-url]: https://expressjs.com/
[mocha-url]: https://mochajs.org/
[mongodb-url]: https://www.mongodb.com/
[mongoose-url]: https://mongoosejs.com/
[node-url]: https://nodejs.org/en/
[sinon-url]: https://sinonjs.org/
[typescript-url]: https://www.typescriptlang.org/
