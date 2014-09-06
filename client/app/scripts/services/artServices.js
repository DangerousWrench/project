angular.module('dangerousWrenchApp')
  // may need to include RESTUrl somehow, unltess it's set somewhere
  .factory('GenerateArtInfo', function($http) {
    var generate = function(artId) {
      var data = JSON.stringify({painting: artId});
      return $http({
        method: 'POST',
        url: '/generateArtInfo',
        data: data
      })
    };
    return {
      generate: generate
    }
  });