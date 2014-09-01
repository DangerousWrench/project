angular.module('dangerousWrenchApp')
	.factory('LikeArt', function($http) {
		this.like = function() {
			return $http({
				method: 'POST',
				url: '', // not sure about this
				data: {} // insert query here; would create an edge between the art and user nodes
			})
			.then(function() {
				console.log('Successfully liked!');
			})
			.catch(function() {
				console.log('Unable to like piece!');
			})
		};
	})
	.factory('GenerateArtInfo', function($http) {
		this.generate = function() {
			return $http({
				method: 'POST',
				url: '', // not sure about this
				data: {} // insert the query here; would return all nodes connected to the piece
			})
			.then(function(data) {
				this.results = data.data // may change based on DB formatting
				console.log(this.results);
				console.log('Successfully generated info!');
			})
			.catch(function(error) {
				console.log('Failed to generate info!');
			})
		};
	});