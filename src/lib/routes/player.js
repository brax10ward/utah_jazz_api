const makeRequest = require('../request');

module.exports = {
  method: 'GET',
  path: '/player/{id}',
  options: {
    description: 'Player information',
    tags: ['api'],
    handler: async (request) => {
      const { data: { api: { players } } } = await makeRequest({
        method: 'GET',
        url: `https://api-nba-v1.p.rapidapi.com/players/playerId/${request.params.id}`,
      }).catch((err) => {
        console.log(err);
      });

      return players[0];
    },
  },
};
