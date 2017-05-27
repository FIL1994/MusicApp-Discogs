/**
 * Created by Philip
 *              on 2017-05-25.
 */
'use strict';

angular.module('myApp.master', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/master', {
            templateUrl: 'master/master.html',
            controller: 'MasterCtrl'
        });
    }])

    .controller('MasterCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

        $http.get($rootScope.request)
            .then(function(response) {
                $scope.info = response.data;
                console.log(response);
            });
    }]);