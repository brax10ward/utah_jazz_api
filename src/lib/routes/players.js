const makeRequest = require('../request');

module.exports = {
  method: 'GET',
  path: '/players',
  options: {
    tags: ['api'],
    handler: async () => {
      const { data: { api: { players } } } = await makeRequest({
        method: 'GET',
        url: 'https://api-nba-v1.p.rapidapi.com/players/teamId/82',

      }).catch((err) => {
        console.log(err);
      });

      return players.map((player) => ({
        name: `${player.firstName} ${player.lastName}`,
        playerId: player.playerId,
      }));
    },
  },
};
