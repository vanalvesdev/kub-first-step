const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const filePath = path.join(__dirname, process.env.STORY_FOLDER, 'text.txt');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!!!!</h1>
    <p>This is new!!</p>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.get('/story', (req, res) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to open file.' });
    }
    res.status(200).json({ story: data.toString() });
  });
});

app.post('/story', (req, res) => {
  const newText = req.body.text;
  if (newText.trim().length === 0) {
    return res.status(422).json({ message: 'Text must not be empty!' });
  }
  fs.appendFile(filePath, newText + '\n', (err) => {
    if (err) {
      return res.status(500).json({ message: 'Storing the text failed.' });
    }
    res.status(201).json({ message: 'Text was stored!' });
  });
});

app.listen(8080);
