angular.module('dangerousWrenchApp')
	.controller('ArtCtrl', function($scope, LikeArt, GenerateArtInfo) {
		// assign $scope the generate function from the GenerateArtInfo service
		$scope.generate = GenerateArtInfo.generate;
		// then invoke it on the next line, so that $scope.results has data to pass along to the view
		$scope.generate();
		$scope.like = LikeArt.like;
	});