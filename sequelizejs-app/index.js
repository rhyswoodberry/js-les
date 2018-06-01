const express = require('express');
const bodyParser = require('body-parser');

const studentsRouter = require('./students/router');
const sequelize = require('./db')

const app = express();
const port = 4000;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

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