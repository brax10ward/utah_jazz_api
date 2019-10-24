module.exports = {
  path: '/',
  method: 'GET',
  handler(request, h) {
    return h.response().redirect('/docs');
  },
};
