'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.search',
    'myApp.artist',
    'myApp.release',
    'myApp.label',
    'myApp.master',
    'myApp.artistReleases',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/search'});
}]).run(['$rootScope', function ($rootScope) {
    $rootScope.event=[];
}]);

//https://www.discogs.com/developers/#page:authentication,header:authentication-discogs-auth-flow
