const express = require('express')
const router = express.Router()


const User = require('../models/User')

// router.get('/', (req,res) => res.send('USER ROUTER'))

//@route POST api/auth/register
//@desc Regiser user
//@access Public

router.post('/register', async(req,res) => {
    
    
})


module.exports = router