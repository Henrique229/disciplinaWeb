import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

function processText(acao, input) {
  if (acao === 'lowercase') {
    return input.toLowerCase();
  } else if (acao === 'uppercase') {
    return input.toUpperCase();
  } else {
    return null;
  }
}

app.post('/util/text/lowercase', (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: 'O campo "input" é necessário.' });
  }

  const output = processText('lowercase', input);

  res.status(200).json({
    action: 'lowercase',
    input: input,
    output: output
  });
});

app.post('/util/text/uppercase', (req, res) => {
  const { input } = req.body;

  if (!input) {
    return res.status(400).json({ error: 'O campo "input" é necessário.' });
  }

  const output = processText('uppercase', input);

  res.status(200).json({
    action: 'uppercase',
    input: input,
    output: output
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

