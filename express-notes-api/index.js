var express = require('express');
var app = express();
var jsonExpress = express.json();
app.use(jsonExpress);
var dataFetch = require('./data.json');
const fs = require('fs');

app.get('/api/notes', function (req, res) {
  const noteArray = [];
  for (const i in dataFetch.notes) {
    noteArray.push(dataFetch.notes[i]);
  }
  res.json(noteArray);
});

app.get('/api/notes/:id', function (req, res) {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataFetch.notes[req.params.id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    res.json(dataFetch.notes[req.params.id]);
  }
});

app.post('/api/notes', function (req, res) {
  var reqBody = req.body;
  if (reqBody.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    var dataForPost = require('./data.json');
    reqBody.id = dataForPost.nextId;
    dataForPost.notes[dataForPost.nextId] = reqBody;
    dataForPost.nextId++;
    const dataStr = JSON.stringify(dataForPost, null, 2);
    fs.writeFile('data.json', dataStr, err => {
      if (err) {
        return res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(dataForPost.notes[dataForPost.nextId - 1]);
      }
    });
  }
});

app.delete('/api/notes/:id', function (req, res) {
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataFetch.notes[req.params.id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    delete dataFetch.notes[req.params.id];
    const dataStrForDelete = JSON.stringify(dataFetch, null, 2);
    fs.writeFile('data.json', dataStrForDelete, err => {
      if (err) {
        return res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).json();
      }
    });
  }
});

app.put('/api/notes/:id', function (req, res) {
  var reqBodyPut = req.body;
  reqBodyPut.id = parseInt(req.params.id);
  if (req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (reqBodyPut.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (dataFetch.notes[req.params.id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + req.params.id });
  } else {
    dataFetch.notes[req.params.id] = reqBodyPut;
    const dataStrForPut = JSON.stringify(dataFetch, null, 2);
    fs.writeFile('data.json', dataStrForPut, err => {
      if (err) {
        return res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(dataFetch.notes[req.params.id]);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
