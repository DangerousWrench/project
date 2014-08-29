

angular.module('dangerousWrenchServices', [])

  .factory('Main', function ($http) {
    
    var search = function(url) {
      method: 'GET',
      url: '/api/ ---path to images database---'
      data: 
    }

    return {
      search: search
    };
    
  })
