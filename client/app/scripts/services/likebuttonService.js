angular.module('dangerousWrenchApp')
.factory('likeButton', function($http){

  var like = function(id){
    return $http.get('/like/'+id);
  }

  return {
    like: like
  }
})