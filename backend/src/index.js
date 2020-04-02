const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb://belsidev02:belsidesenvolvimento1010@cluster0-shard-00-00-0z4xu.mongodb.net:27017,cluster0-shard-00-01-0z4xu.mongodb.net:27017,cluster0-shard-00-02-0z4xu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

// Query Params: request.query(Filtros, ordenação, paginação,...)
//Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body(Dados para criação ou alteração de um registro)

// MongoDB(Não-Relacional)

server.listen(3333);