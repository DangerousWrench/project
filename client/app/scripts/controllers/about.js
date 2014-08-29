'use strict';

/**
 * @ngdoc function
 * @name dangerousWrenchApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dangerousWrenchApp
 */
angular.module('dangerousWrenchApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
