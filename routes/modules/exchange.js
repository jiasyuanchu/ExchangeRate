const express = require('express')
const router = express.Router()

const exchangeController = require('../../controllers/exchange-controller')

router.get('/', exchangeController.getExchanges)

router.use('/', (req, res) => res.send('This is exchange rate page.'))


module.exports = router
