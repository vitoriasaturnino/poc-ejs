import express from 'express';
const app = express();

const port = process.env.PORT || 3001;

app.get('/home', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () =>
  console.log(`Servidor rodando na porta ${port}`)
);
