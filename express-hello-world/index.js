var express = require('express');
const app = express();
app.use(function (req, res, next) {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.send('Hello, World!');
  next();
});
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
