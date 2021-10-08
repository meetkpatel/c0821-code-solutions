var express = require('express');
const app = express();
var jsonExpress = express.json();
var nextId = 1;
var grades = {};

app.use(jsonExpress);
app.get('/api/grades', function (req, res) {
  var gradesArr = [];
  for (const i in grades) {
    gradesArr.push(grades[i]);
  }
  res.json(gradesArr);
});

app.post('/api/grades', function (req, res) {
  var reqBody = req.body;
  reqBody.id = nextId;
  nextId++;
  res.status(201);
  res.json(reqBody);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
