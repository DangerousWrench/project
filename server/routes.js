//establish a connection to the database
var neo4j = require('neo4j');
var passport = require('./passport-config.js')
var db = new neo4j.GraphDatabase('http://app29028125:ZcUY4iYVR6P8MKPj1Z5c@app29028125.sb02.stations.graphenedb.com:24789');
var utils = require('./utils.js');

module.exports = function(app){

  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/api/painting', function(req, res){
    //get painting data
    res.end(data);
  })

  app.post('/signup', function(req, res){
    var params = {username: req.body.signup_username, password: req.body.signup_password};
    db.query('CREATE (n:User { username: ({username}), password: ({password}) })', params, function(err){
      if(err) { console.log(err); }
      res.redirect('/');
    })
  })

  app.post('/login', passport.authenticate('local'), function(req, res){
    console.log(req.user);
    res.redirect('/#/homepage/' + req.user._data.data.username);
  })

  //needs s3
  app.post('/generateArtInfo', function(req, res) { 
    // may have to change variable names and refactor based on database formatting
    var pid = parseInt(req.body.painting);
    db.query('MATCH (n:Work) WHERE id(n)='+ pid +' RETURN n', function(err, data) {
      if (err) console.log(err);
      data = utils.makeData(data, 'n');
      data = utils.appendUrl(data);
      data = data[0];
      db.query('MATCH (a:Work)-[r:HAS_FEATURE]->(n:Feature) WHERE id(a)=({id}) RETURN n', data, function(err, features) {
        if (err) console.log(err);
        var features = utils.makeData(features, 'n');
        var dataObject = JSON.stringify({painting: data, features: features});
        res.end(dataObject);
      })
    })
  })

  //needs s3
  app.post('/generateRecommendations', function(req, res) {
    // 'Person' may have to be replaced with whatever we end up labelling user nodes
    db.query('MATCH (p1:User)-[x:LIKES]->(m:Work)<-[y:LIKES]-(p2:User) WITH SUM(x.rating * y.rating) AS xyDotProduct, SQRT(REDUCE(xDot = 0.0, a IN COLLECT(x.rating) | xDot + a^2)) AS xLength, SQRT(REDUCE(yDot = 0.0, b IN COLLECT(y.rating) | yDot + b^2)) AS yLength, p1, p2 MERGE (p1)-[s:SIMILARITY]-(p2) SET s.similarity = xyDotProduct / (xLength * yLength)', function(err, data) {
      if (err) console.log(err);
      var username = req.body.username;
      // m.name may have to be replaced with whatever we end up calling the name property/identifier of a work
      db.query('MATCH (b:User)-[r:LIKES]->(m:Work), (b)-[s:SIMILARITY]-(a:User {username:"'+ username +'"}) WHERE NOT((a)-[:LIKES]->(m)) WITH m, s.similarity AS similarity, r.rating AS rating ORDER BY m.title, similarity DESC WITH m.title AS work, COLLECT(rating)[0..3] AS ratings WITH work, REDUCE(s = 0, i IN ratings | s + i)*1.0 / LENGTH(ratings) AS reco ORDER BY reco DESC RETURN work AS Work, reco AS Recommendation', username, function(err, data) {
        if (err) console.log(err);
        // these may have to be replaced with the lower-case references
        var works = utils.makeData(data, 'Work');
        var recommendations = utils.makeData(data, 'Recommendation');
        var dataObject = JSON.stringify({works: works, recommendations: recommendations});
        console.log(dataObject);
        res.end(dataObject);
      })
    })
  })


  //needs s3
  app.post('/generateUserLikes', function(req, res) {
    //may have to change names, etc., based on db format
    //'like' here = edge between usernode and artwork node

    var params = {username: req.body.username}; 
    db.query('MATCH (n:User {username: ({username})})-[:LIKES]->(m:Work)\nRETURN m limit 1000', params, function(err, data) {
      if (err) console.log(err);
      var likesObj = utils.makeData(data, 'm');
      likesObj = utils.appendUrl(likesObj);
      likesObj = JSON.stringify({results: likesObj});
      res.end(likesObj);
    })
  })

  //keyword search needs s3
  app.post('/KeywordSearch', function(req, res) {
    var searchterms = req.body.searchterms;
    var searchterms = searchterms.split(' ');
    // var propertyKeys = [title, dates, image, name, type, artist, value]
    var query = [];
    query.push('MATCH (n:Work)-[:HAS_FEATURE]-(a:Feature) WHERE ');
    console.log('SEARCHTERMS=', searchterms);
    for (var i = 0; i < searchterms.length; i++) {
      console.log('searchterm', searchterms[i])
      // for (var k = 0; k < propertyKeys.length; k++)
      query.push('(n.title =~ "(?i).*'+ searchterms[i] +'.*" OR n.image =~ ".*'+ searchterms[i] +'.*" OR n.artist =~ ".*'+ searchterms[i] +'.*" OR (a.type = "TIMELINE" AND a.value =~ ".*'+ searchterms[i] +'.*") OR (a.type = "TYPE" AND a.value =~ ".*'+ searchterms[i] +'.*") OR (a.type = "FORM" AND a.value =~ ".*'+ searchterms[i] +'.*") OR (a.type = "SCHOOL" AND a.value =~ ".*'+ searchterms[i] +'.*") OR (a.type = "TECHNIQUE" AND a.value =~ ".*'+ searchterms[i] +'.*") OR (a.type = "DATE" AND a.value =~ ".*'+ searchterms[i] +'.*"))');  
      if (i < searchterms.length - 1) {
        query.push(' AND ');
      }
    }
    query.push(' return distinct n limit 1000');
    query = query.join('');
    console.log(query)
    db.query(query, function(err, data) {
      if (err) console.log(err);
      var searchResult = utils.makeData(data, 'n');
      searchResult = utils.appendUrl(searchResult);
      searchResult = JSON.stringify(searchResult);
      res.end(searchResult);
    })
  })

  app.get('/like/:id', function(req, res){
    var params = { id: parseInt(req.params.id), user: parseInt(req.user.id) };
    db.query('MATCH (n:User),(b:Work)\nWHERE id(n)=({user}) AND id(b)=({id})\nCREATE (n)-[:LIKES {rating:1}]->(b)', params, function(err){
      if (err) console.log(err);
      console.log('like created!');
      console.log(req.user);
      console.log(params);
      res.end();
    })
  })
  
};





