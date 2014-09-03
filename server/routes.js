//establish a connection to the database
var neo4j = require('neo4j');
var passport = require('./passport-config.js')
var db = new neo4j.GraphDatabase(
    process.env['GRAPHENEDB_URL'] ||
    'http://localhost:7474'
);

module.exports = function(app){

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/api/painting', function(req, res){
    //get painting data
    res.end(data);
  })

  app.post('/signup', function(req, res){
    var params = {username: req.body.signup_username, password: req.body.signup_password};
    db.query('CREATE (n:Cat { username: ({username}), password: ({password}) })', params, function(err){
      if(err) { console.log(err); }
      res.redirect('/');
    })
  })

  app.post('/login', passport.authenticate('local'), function(req, res){
    console.log(req.user);
    res.redirect('/')
  })
}