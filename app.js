const morgan = require('morgan');
const express = require('express');
// const bodyParser = require('body-parser')
const layout = require('./views/layout');
const { db, Page, User } = require('./models/index');
const models = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res, next) => {
  // console.log('hello world');
  res.send(layout(''));
});

const PORT = 3000;
const init = async () => {
  await db.sync();
  app.listen(3000, () => {
    console.log(`listening on ${PORT}`);
  });
};

init();
