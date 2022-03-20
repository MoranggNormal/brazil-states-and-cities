var express = require('express');
var router = express.Router();
const data = require('../public/assets/brazil-data.json')

const states = data.estados.map(({sigla, nome}) => {
  return {
    sigla,
    nome
  }
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(states);
});

module.exports = router;
