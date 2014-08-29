

angular.module('dangerousWrenchServices', [])

  .factory('KeywordSearch', function ($http) {
    var Search = {
      seachterms: searchterms,
      getImages: function(searchterms) {
        return $http.get(//query database)
        //for now, once we have a browse page set up, we can redirect there
          .then(function(response) {
            //load search results page
          })
          .catch(function(error) {
            //handle error
          });
      }
    };
    return Search;
  })
