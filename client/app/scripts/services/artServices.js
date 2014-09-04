angular.module('dangerousWrenchApp')
	// may need to include RESTUrl somehow, unltess it's set somewhere
	.factory('GenerateArtInfo', function($http, RESTUrl) {
		this.generate = function(artId) {
			return $http({
				method: 'POST',
				url: RESTUrl + '/generateArtInfo', // not sure about this
				data: {painting: artId}
			})
		};
	});