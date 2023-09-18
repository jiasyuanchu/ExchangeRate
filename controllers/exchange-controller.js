const exchangeRates = require('../helpers/exchangeRates')

const exchangeController = {
  getExchanges: async (req, res, next) => {
    const { source, target, amount } = req.query

    if (!source || !target || !amount) {
      return res.status(400).json({ msg: 'Please provide source, target and amount' })
    }

    const cleanedAmount = amount.replace(/[^0-9.]/g, '')

    if (exchangeRates.currencies[source] && exchangeRates.currencies[source][target]) {
      const rate = exchangeRates.currencies[source][target]
      const convertedAmount = parseFloat(cleanedAmount) * rate
      const roundedAmount = Math.round(convertedAmount * 100) / 100
      const amountWithoutCommas = roundedAmount.toString().replace(/,/g, '')
      return res.json({ msg: 'success', amount: `$${amountWithoutCommas}` })
    }
    return res.status(400).json({ msg: 'Invalid currency or exchange rate' })
  },
}

module.exports = exchangeController
