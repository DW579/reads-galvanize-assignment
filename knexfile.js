module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/galvanize-reads-data'
  },

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
