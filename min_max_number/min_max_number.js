import express from 'express';

const app = express();
const port = 3000;

function processNumbers(acao, numeros) {
  const numArray = numeros.split(',').map(Number);
  if (acao === 'minimum') {
    return Math.min(...numArray);
  } else if (acao === 'maximum') {
    return Math.max(...numArray);
  } else {
    return null;
  }
}


app.get('/util/number/minimum', (req, res) => {
  const { input } = req.query;

  if (!input) {
    return res.status(400).json({ error: 'O parâmetro "input" é necessário.' });
  }

  const resultado = processNumbers('minimum', input);

  res.status(200).json({
    action: 'minimum',
    input: input,
    output: resultado
  });
});


app.get('/util/number/maximum', (req, res) => {
  const { input } = req.query;

  if (!input) {
    return res.status(400).json({ error: 'O parâmetro "input" é necessário.' });
  }

  const resultado = processNumbers('maximum', input);

  res.status(200).json({
    action: 'maximum',
    input: input,
    output: resultado
  });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
