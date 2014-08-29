'use strict';

/**
 * @ngdoc function
 * @name dangerousWrenchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dangerousWrenchApp
 */
angular.module('dangerousWrenchApp', [])
  .controller('MainCtrl', function ($scope, 'PopularImages') {
    $scope.getPopImages = PopularImages.getPopImages; //used on ng-click on image 
  });


  //service (factory?) to get current popular images if someone clicks on one of those
  .service('PopularImages', function($http) {
    this.getPopImages = function(<<ng-click target?>>)
      return $http({
        method: 'GET',
        url: 'api/????'
      })
      .then(function(response) {
        //go to view page with popular images?
      })
        .catch(function(error) {
          //error handler
        })
  });




  //service for auth/login?