var AWS = require('aws-sdk');
AWS.config.loadFromPath(__dirname + '/aws.json');
var s3 = new AWS.S3();

exports.makeData = function(data, key){
  if(!data || !(data.length)){
    return false;
  } else {
    var results = [];
    for(var i = 0; i < data.length; i++){
      var current = data[i][key];
      var id = current.id;
      var current = current._data.data;
      current.id = id;
      results.push(current);
    }
  }
  return results;
}

exports.appendUrl = function(data){
  for(var i = 0; i < data.length; i++){
    var image = data[i].image;
    data[i].url = s3.getSignedUrl('getObject', {Bucket: 'dangerouswrench', Key: image});
  }
  return data;
}