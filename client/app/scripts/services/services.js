

angular.module('dangerousWrenchApp')

  .factory('KeywordSearch', function ($http, $location) {
    var displayResults = function() {
        $location.path('/search-results');
    };
    var Search = {
      search: function(searchterms) {
        searchterms = JSON.stringify({searchterms: searchterms});
        return $http({
          method: 'POST',
          url: '/KeywordSearch',
          data: searchterms
        })
        .then(function (response) {
          response = response.data;
          displayResults(); 
          console.log(response);
        }).catch(function(err) {
          console.log('error in getting search results');        
      })
    }
  }
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
