'use strict';

/**
 * @ngdoc function
 * @name dangerousWrenchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dangerousWrenchApp
 */
angular.module('dangerousWrenchApp', [])
  .controller('MainCtrl', function ($scope) {

    $scope.searchterms = KeywordSearch.searchterms;
    KeyWordSearch.getImages(); 
    
});





