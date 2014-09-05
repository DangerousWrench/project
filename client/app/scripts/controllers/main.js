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
      $scope.search.results = KeywordSearch.search($scope.searchterms)
        .then(function (response) {
          $scope.artData = response.data;
          $scope.displayResults(response);
          // console.log("scope.artdata = ", $scope.artData);
        }, function (error) {
          console.log(error);
        })
    };

    
})

  .controller('SearchResultsCtrl', function ($scope, SelectPiece, KeywordSearch) {
    $scope.searchterms;
    $scope.artData = {};
    $scope.search = function() {
      $scope.search.results = KeywordSearch.search($scope.searchterms)
        .then(function (response) {
          $scope.artData = response.data;
          // $scope.displayResults(response);
          // console.log("scope.artdata = ", $scope.artData);
        }, function (error) {
          console.log(error);
        })
    };

    $scope.select = SelectPiece.getimage;
})





