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
  .config(function ($routeProvider) {
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
        templateUrl: 'search-results.html',
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
