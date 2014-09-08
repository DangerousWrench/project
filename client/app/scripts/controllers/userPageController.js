//use 'strict';

angular.module('dangerousWrenchApp')
  .controller('UserController', function ($scope, KeywordSearch, userServices, $routeParams) {

    $scope.searchterms;
    $scope.displayResults = function() {
      KeywordSearch.displayResults($scope.searchterms);
    };

    $scope.username = $routeParams.user
  
    //generateUserLikes is the factory function that queries 
    //for a specific users 'liked' art
    $scope.displayUserLikes = userServices.generateUserLikes;

    $scope.displayUserLikes($scope.username)
      .then(function(data) {
        $scope.userLikesResults = data.data.results;
        console.log($scope.userLikesResults);
        console.log('Retrieved users likes!');
        console.log($scope.userLikesResults)
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

