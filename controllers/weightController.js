const Weight = require("../models/Weight")

exports.apiCreateWeight = function (req, res) {
  let weight = new Weight(req.body)
  weight
    .createWeight()
    .then(function (newId) {
      res.json(newId)
    })
    .catch(function (errors) {
      res.json(errors)
    })
}

