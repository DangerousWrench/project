angular.module('dangerousWrenchApp')
  .controller('ArtCtrl', function($scope, $routeParams, likeButton, GenerateArtInfo) {
    // assign $scope the generate function from the GenerateArtInfo service
    $scope.generate = GenerateArtInfo.generate;
    // then invoke it on the next line, so that $scope.results has data to pass along to the view
    $scope.generate($routeParams.artId)
      .then(function(data) {
        console.log(data.data);
        $scope.results = data.data.features;
        $scope.work = data.data.painting;
        console.log($scope.work.id);
        console.log($scope.results);
        console.log('Successfully generated info!');
      })
      .catch(function() {
        console.log('Failed to generate info!');
      })
    $scope.like = function(){
      likeButton.like($routeParams.artId);
    }
  });