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
    
})

  //  .controller('SearchResultsCtrl', function ($scope) {
  //   $scope.piece.id
  //   $scope.select = Select.getimage(pieceid);
  // })





