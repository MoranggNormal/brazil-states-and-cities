var express = require('express');
var router = express.Router();
const data = require('../public/assets/brazil-data.json')

const states = data.estados.map(({sigla, label}) => {
  return {
    sigla,
    label
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.send(states);
});

module.exports = router;
