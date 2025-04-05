const exchangeRates = require('../helpers/exchangeRates');

const exchangeController = {
  getExchanges: async (req, res, next) => {
    try {
      const { source, target, amount } = req.query;

      if (!source || !target || !amount) {
        return res.status(400).json({ msg: 'Please provide source, target and amount' });
      }

      const cleanedAmount = amount.replace(/[^0-9.]/g, '');
      const parsedAmount = parseFloat(cleanedAmount);

      if (!exchangeRates.currencies[source] || !exchangeRates.currencies[source][target]) {
        return res.status(400).json({ msg: 'Invalid currency or exchange rate' });
      }

      const rate = exchangeRates.currencies[source][target];
      const convertedAmount = parsedAmount * rate;
      const roundedAmount = Math.round(convertedAmount * 100) / 100;

      return res.json({
        msg: 'success',
        amount: `$${roundedAmount}`
      });
    } catch (error) {
      return res.status(500).json({ msg: 'Server error during exchange calculation' });
    }
  },
};

module.exports = exchangeController;