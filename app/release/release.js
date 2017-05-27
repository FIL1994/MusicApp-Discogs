/**
 * Created by Philip
 *              on 2017-05-25.
 */
'use strict';

angular.module('myApp.release', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/release', {
            templateUrl: 'release/release.html',
            controller: 'ReleaseCtrl'
        });
    }])

    .controller('ReleaseCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
        $http.get($rootScope.request)
            .then(function(response) {
                $scope.info = response.data;
                console.log(response);
            });
    }]);