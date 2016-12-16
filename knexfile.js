// Update with your config settings.

module.exports = {

  development:
  {
    client: 'pg',
    connection: 'postgres://localhost/dota_dev',
  },

  test:
  {
    client: 'pg',
    connection: 'postgres://localhost/dota_test',
  },


  production:
  {

  }

};
