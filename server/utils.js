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