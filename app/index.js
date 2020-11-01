var neo4jReaderService = require('./services/neo4j-reader.service.js');

const services= { neo4jReaderService };

const nmApp= {
  ...services
}
module.exports = nmApp;
