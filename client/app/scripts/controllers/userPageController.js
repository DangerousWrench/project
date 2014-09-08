//use 'strict';

angular.module('dangerousWrenchApp')
  .controller('UserController', function ($scope, KeywordSearch, userServices) {
    
    //Im not quite sure how the recommendation engine will work, but 
    // my small mind tells me it will be something like the following
    // 
    //generateUserLikes is the factory function that queries 
    //for a specific users 'liked' art
    $scope.displayUserLikes = userServices.generateUserLikes;
    $scope.displayUserLikes()
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
    $scope.displayUserRecommendations()
      .then(function(data) {
        $scope.userRecommendationsResults = data.data;
        console.log($scope.userRecommendationsResults);
        console.log('Generated user recommendations!');
      })
      .catch(function(){
        console.log('Failed to generate user recommendations :|')
      })      


      
});

