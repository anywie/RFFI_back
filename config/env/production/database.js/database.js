const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host,
        port: config.port,
        database: config.database,
        username: config.user,
        password: config.password,
      },
      options: {
        ssl: false,
      },
    },
  },
});
 postgres://ibmdhxdobdsryu:ea8f673aef543b079d6f41a1909b79dd0de67e4005ff00597b0179b4f621d3c0@ec2-34-237-236-32.compute-1.amazonaws.com:5432/d3ddv4gej9ol3k