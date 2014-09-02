'use strict';

/**
 * @ngdoc overview
 * @name dangerousWrenchApp
 * @description
 * # dangerousWrenchApp
 *
 * Main module of the application.
 */
angular
  .module('dangerousWrenchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when ('/search-results', {
<<<<<<< HEAD
        templateUrl: 'views/search-results.html',
=======
        templateUrl: 'search-results.html',
>>>>>>> 208c870f5dfaa703fa5019528114c13cfb228b14
        controller: 'SearchResultsCtrl'
      })
      .when('/art/:artId', {
        templateUrl: 'views/art.html',
        controller: 'ArtCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
