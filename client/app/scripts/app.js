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
        templateUrl: 'views/search-results.html',
        controller: 'SearchResultsCtrl'
      })
      // .when('/art/:artId', {
      .when('/art', {
        templateUrl: 'views/art.html',
        controller: 'ArtCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
