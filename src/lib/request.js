const axios = require('axios').default;

module.exports = (options) => {
  try {
    return axios({
      headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key':
          'd8a4422bdemsh7ea3d58b44c16b8p1722a7jsn7843c5fc14e7',
      },
      ...options,
    });
  } catch (error) {
    console.log('error :', error);

    return error;
  }
};
