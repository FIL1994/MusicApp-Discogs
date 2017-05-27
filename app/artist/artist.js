/**
 * Created by Philip
 *              on 2017-05-25.
 */
'use strict';

angular.module('myApp.artist', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/artist', {
            templateUrl: 'artist/artist.html',
            controller: 'ArtistCtrl'
        });
    }])

    .controller('ArtistCtrl', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location) {
        $scope.msg = "From artist controller";

        $http.get($rootScope.request)
            .then(function(response) {
                $scope.info = response.data;
                console.log(response);
            });
        
        $scope.getReleases = function (url) {
            $rootScope.request = url + "?" + sign;
            $location.path('artistReleases').search({page: '1'});
        }
    }]);