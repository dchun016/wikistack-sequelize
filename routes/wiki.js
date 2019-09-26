const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const layout = require('../views/layout');

router.get('/', async (req, res, next) => {
  try {
    res.send(layout('got to Get /wiki'));
  } catch (err) {
    console.log(err);
  }
});
router.post('/', async (req, res, next) => {
  try {
    res.send(layout('got to Post /wiki'));
  } catch (err) {
    console.log(err);
  }
});
router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
