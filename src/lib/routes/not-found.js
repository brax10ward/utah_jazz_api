module.exports = {
  method: '*',
  path: '/{any*}',
  handler() {
    return '404 Error! Page Not Found!';
  },
};
