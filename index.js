// Importa o Express
const express = require('express');
const app = express();

// Porta onde o app vai rodar
const port = process.env.PORT || 3000;

// Mensagem inicial no terminal
console.log("Automação iniciada!");

// Rota principal (página inicial)
app.get('/', (req, res) => {
  res.send('Olá Mundo!');
});

// Rota personalizada que você pediu
app.get('/bem-vindo', (req, res) => {
  res.send('Bem-vindo ao seu app automatizado!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

