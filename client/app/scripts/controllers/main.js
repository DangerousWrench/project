'use strict';

/**
 * @ngdoc function
 * @name dangerousWrenchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dangerousWrenchApp
 */
angular.module('dangerousWrenchApp')
  .controller('MainCtrl', function ($scope, KeywordSearch) {
    $scope.searchterms;
    $scope.search = KeywordSearch.search; 
    $scope.displayResults = KeywordSearch.displayResults;

    $scope.search = function() {
      $scope.displayResults($scope.searchterms);
    //   $scope.search.results = KeywordSearch.search($scope.searchterms)
    //     .then(function (response) {
    //       $scope.artData = response.data;
    //       $scope.displayResults(response);
    //       console.log("scope.artdata main= ", $scope.artData);
    //     }, function (error) {
    //       console.log(error);
    //     })
    };

    
})

  .controller('SearchResultsCtrl', function ($scope, $rootScope, SelectPiece, KeywordSearch) {
    $scope.searchterms;
    $scope.artData = {};
    $scope.search = function() {
      $scope.search.results = KeywordSearch.search($scope.searchterms)
        .then(function (response) {
          $scope.artData = response.data;
          // $scope.displayResults(response);
          console.log("scope.artdata searchresults = ", $scope.artData);
        }, function (error) {
          console.log(error);
        })
    };
    $rootScope.$on('redirected', function (event, data) {
      console.log('in scope.on', data.data)
      $scope.searchterms = data.data;
      $scope.search();
    });
    $scope.select = SelectPiece.getimage;
})





