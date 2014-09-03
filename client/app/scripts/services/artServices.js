angular.module('dangerousWrenchApp')
	.factory('GenerateArtInfo', function($http) {
		this.generate = function(artId) {
			return $http({
				method: 'POST',
				url: '', // not sure about this
				data: {artId} // insert the query here; will return all nodes connected to the piece
			})
		};
	});