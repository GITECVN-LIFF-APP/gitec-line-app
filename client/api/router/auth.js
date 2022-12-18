const express = require('express')
const authRouter = express.Router()


const User = require('../models/User')

// router.get('/', (req,res) => res.send('USER ROUTER'))

//@route POST api/auth/register
//@desc Regiser user
//@access Public

authRouter.route('/register').post(function(req,res)) {
   
})


module.exports = router