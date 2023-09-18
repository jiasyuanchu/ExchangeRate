const express = require('express')
const router = express.Router()

const exchange = require('./modules/exchange')

router.use('/exchange', exchange)
router.use('/', (req, res) => res.send('This is home page.'))

module.exports = router