angular.module('dangerousWrenchApp')
  .factory('userServices', function($http) {
    this.generateUserLikes = function() {
      return $http({
        method: 'POST',
        url: '', // not sure about this either...
        data: {} // insert query here; will return 'like edges' connected to the user...?
      })
    };


    //finds trends within the data passed in, which will be a collection
    //  of the users liked pieces 
    this.findTrends = function(data){};

    // generates user likes with existing function and passes that data to
    // the findTrends method
    this.generateUserPreferences = function() {
      var userPreferences = {};
      this.generateUserLikes()
        .then(function(data){
          //should this information be cached?
          userPreferences = this.findTrends(data);
          console.log('Generated user trends!')
        })
        .catch(function(){
          console.log('Failed to generate user trends :|')
        })
      return userPreferences; //return statement here? or in the promise callback?
    }

    this.generateUserRecommendations = function() 
      var userPreferences = this.generateUserPreferences();
      return $http({
        method: 'POST',
        url: '', //...
        data: {} // insert query here, using information generated from userPreferences method
      }) 
    }
  });
