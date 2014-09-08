angular.module('dangerousWrenchApp')
  .factory('userServices', function ($http) {
    return {
      generateUserLikes: function(username) {
        var username = JSON.stringify({username: username});
        return $http({
          method: 'POST',
          url: '/generateUserLikes', 
          data: username 
        })
      },

      generateUserRecommendations: function(username) { 
        var username = JSON.stringify({username: username});
        return $http({
          method: 'POST',
          url: '/generateRecommendations', 
          data: username 
        }) 
      }
    }
  });
