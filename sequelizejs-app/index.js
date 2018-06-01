const express = require('express');
const bodyParser = require('body-parser');
const studentsRouter = require('express');
const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use((req, resp, next) => {
  console.log(req.headers)
  next()
});

app.use('/students', studentsRouter);

app.listen(port, (err) => {
  if (err) {
    return console.log('Error! ' + err)
  }
  console.log(`Server started on port ${port}`)
});