//use 'strict';

angular.module('dangerousWrenchApp')
  .controller('UserController', function ($scope, KeywordSearch, userServices) {
<<<<<<< HEAD
    
    //Im not quite sure how the recommendation engine will work, but 
    // my small mind tells me it will be something like the following
    // 
=======

    $scope.searchterms;
    $scope.displayResults = function() {
      KeywordSearch.displayResults($scope.searchterms);
    };

    $scope.username = $location.search().q;
  
>>>>>>> userpage controller and factor
    //generateUserLikes is the factory function that queries 
    //for a specific users 'liked' art
    $scope.displayUserLikes = userServices.generateUserLikes;

    $scope.displayUserLikes($scope.username)
      .then(function(data) {
        $scope.userLikesResults = data.data;
        console.log($scope.userLikesResults);
        console.log('Retrieved users likes!');
      })
      .catch(function(){
        console.log('Failed to find users likes :|')
      })


    //generateUserRecommendations is the factory function that queries
    //for a specific users recommended pieces
    $scope.displayUserRecommendations = userServices.generateUserRecommendations;
    $scope.displayUserRecommendations($scope.username)
      .then(function(data) {
        $scope.userRecommendationsResults = data.data;
        console.log($scope.userRecommendationsResults);
        console.log('Generated user recommendations!');
      })
      .catch(function(){
        console.log('Failed to generate user recommendations :|')
      })           
});

