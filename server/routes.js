//establish a connection to the database

module.exports = function(app){
  app.get('/api/painting', function(req, res){
    //get painting data
    res.end(data);
  })
}