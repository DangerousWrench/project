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
    $scope.displayResults = function() {
      KeywordSearch.displayResults($scope.searchterms);
    };
  })

  .controller('SearchResultsCtrl', function ($scope, $rootScope, KeywordSearch) {
    $scope.searchterms;
    $scope.artData = {};
    $scope.search = function() {
      KeywordSearch.search($scope.searchterms)
        .then(function (response) {
          $scope.artData = response.data;
        }, function (error) {
          console.log(error);
        })
    };
    $rootScope.$on('redirected', function (event, data) {
      $scope.searchterms = data.data;
      $scope.search();
    });
})





