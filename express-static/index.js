var express = require('express');
var path = require('path');

var app = express();

var newPath = path.join(__dirname, 'public');
var newStatic = express.static(newPath);
app.use(newStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
