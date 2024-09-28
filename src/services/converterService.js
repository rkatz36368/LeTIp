import api from './api.js'

export const getConvertCurrency = (amount, fromCurrency, toCurrency = 'BRL') => {
    if(amount === 0) return 0
    return api
    .get(`latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`)
    .then((result) => result?.data.rates[toCurrency] || 0)}

