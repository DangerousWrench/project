angular.module('dangerousWrenchApp')
	.factory('GenerateArtInfo', function($http) {
		this.generate = function() {
			return $http({
				method: 'POST',
				url: '', // not sure about this
				data: {} // insert the query here; will return all nodes connected to the piece
			})
		};
	});