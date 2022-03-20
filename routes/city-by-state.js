var express = require('express');
var router = express.Router();
const data = require('../public/assets/brazil-data.json')

const states = data.estados

router.get('/:sigla', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const param = req.params.sigla.toUpperCase();

  // Return an item that matches the param
  const result = states.filter(({sigla}) => sigla === param)
  // Return an array of cities
  const cities = result.map(({cidades}) => cidades)

  res.send(cities);
});

module.exports = router;
