angular.module('dangerousWrenchApp')
	.controller('ArtCtrl', function($scope, GenerateArtInfo) {
		// assign $scope the generate function from the GenerateArtInfo service
		$scope.generate = GenerateArtInfo.generate;
		// then invoke it on the next line, so that $scope.results has data to pass along to the view
		$scope.generate()
			.then(function(data) {
				$scope.results = data.data;
				console.log($scope.results);
				console.log('Successfully generated info!');
			})
			.catch(function() {
				console.log('Failed to generate info!');
			})
	});