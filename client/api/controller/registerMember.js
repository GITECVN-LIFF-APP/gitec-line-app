// persons.route.js

const express = require('express')
const registerMemberRoutes = express.Router()

// Require Business model in our routes module
let RegisterMember = require('../model/registerMember')

// Defined store route
registerMemberRoutes.route('/add').post(function (req, res) {
  let registerMember = new RegisterMember(req.body)
  registerMember
    .save()
    .then((registerMember) => {
      res.status(200).json({ registerMember: 'Register member in added successfully' })
    })
    .catch((err) => {
      res.status(400).send('unable to save to database')
    })
})

module.exports = registerMemberRoutes
