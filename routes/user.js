const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.send('got to Get /user');
});
router.post('/', async (req, res, next) => {
  res.send('got to Post /user');
});
router.get('/add', async (req, res, next) => {
  res.send('got to Get /user/add');
});

module.exports = router;
