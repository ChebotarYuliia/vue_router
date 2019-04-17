const axios = require('axios');

export const HTTP = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 2000, // default is `0` (no timeout)
  responseType: 'json'
});