

angular.module('dangerousWrenchApp')

  .factory('KeywordSearch', function ($http, $location, $q, $rootScope, $timeout) {
    // var displayResults = function(data) {
    //   // console.log('response in displayReults,', displayData)
    //   // console.log(Search.result)
    //   $location.path('/search-results');
    // }
    return {
      displayResults: function(data) {
      // console.log('response in displayReults,', displayData)
      // console.log(Search.result)
      $location.path('/search-results');
      $timeout(function(){$rootScope.$broadcast('redirected', {data: data});}, [200]);
      },

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
  //   var Search = {
  //     search: function(searchterms) {
  //       searchterms = JSON.stringify({searchterms: searchterms});
  //       return $http({
  //         method: 'POST',
  //         url: '/KeywordSearch',
  //         data: searchterms
  //       })
  //       .then(function (response) {
  //         response = response.data;
  //         displayResults(response); 
  //         console.log(response);
  //       }).catch(function(err) {
  //         console.log('error in getting search results');        
  //       })
  //   }
  // }
  //   return Search;
  })

  // .factory('SelectPiece', function ($http) {
  //   return {
  //     getimage: function(artid){
  //       return $http({
  //         method: 'POST',
  //         url: '/generateArtInfo',
  //         data: artid
  //       }).then(function(response) {
  //         $location.path(__dirname + '/' + artid);
  //       }).catch(function(err) {
  //         console.log(artid);
  //         console.log('error accessing image')
  //       })
  //       console.log('getting image');
  //       if (artid) {
  //         console.log(artid);
  //       }
  //     }
  //   };
