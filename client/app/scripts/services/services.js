

angular.module('dangerousWrenchApp')

  .factory('KeywordSearch', function ($http, $location, $q, $rootScope, $timeout) {
    
    return {
      //called on main page.  Appends search term(s) to url and redirects to search results page. 
      displayResults: function(data) {
        $location.path('/search-results').search('q', data);
      },

      //sends search terms to server for database search.
      //response handled in controller. 
      search: function(searchterms) {
        var searchterms = JSON.stringify({searchterms: searchterms});
        console.log(searchterms)
        var deferred = $q.defer();
        var httpPromise = $http({
          method: 'POST',
          url: '/KeywordSearch',
          data: searchterms
          });
        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.log(error);
        });
        return deferred.promise;
      }
    }
  })
  