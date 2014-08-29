//establish a connection to the database
var neo4j = require('neo4j');
var db = new neo4j.GraphDatabase(
    process.env['GRAPHENEDB_URL'] ||
    'http://localhost:7474'
);

module.exports = function(app){
  app.get('/api/painting', function(req, res){
    //get painting data
    res.end(data);
  })
}