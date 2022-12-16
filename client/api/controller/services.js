// persons.route.js

const express = require('express')
const serviceRoutes = express.Router()

// Require Business model in our routes module
let Services = require('../model/service')

// Defined store route
serviceRoutes.route('/add').post(function (req, res) {
  let service = new Services(req.body)
  service
    .save()
    .then((service) => {
      res.status(200).json({ service: 'Service in added successfully' })
    })
    .catch((err) => {
      res.status(400).send('unable to save to database')
    })
})

module.exports = serviceRoutes
