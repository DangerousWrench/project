

angular.module('dangerousWrenchApp')

  .factory('KeywordSearch', function ($http, $location) {
    var displayResults = function() {
        $location.path('/search-results');
        console.log('display results');
    };
    var Search = {
      search: function(searchterms) {
        // return $http({
        //   method: 'GET',
        //   url: '',
        //   data: searchterms
        // })
        // .then(function (response) {
        //   data = response.data;
        //   displayResults(response)
        // }).catch(function(err) {
       //    console.log('error in getting search results')
        console.log(searchterms)
        displayResults(); 
        
      }
      };
    return Search;
  })

  .factory('SelectPiece', function ($http) {
    return {
      getimage: function(pieceid){
        // return $http({
        //   method: 'GET',
        //   url: '',
        //   data: piece.id
        // }).then(function(response) {
        //   $location.path(__dirname + '/' + piece.id);
        // }).catch(function(err) {
        //   console.log('error accessing image')
        // })
        console.log('getting image');
        if (piece.id) {
          console.log(piece.id);
        }
      }
    };
  })
