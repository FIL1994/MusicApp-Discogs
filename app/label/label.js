/**
 * Created by Philip
 *              on 2017-05-25.
 */
'use strict';

angular.module('myApp.label', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/label', {
            templateUrl: 'label/label.html',
            controller: 'LabelCtrl'
        });
    }])

    .controller('LabelCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {

        $http.get($rootScope.request)
            .then(function(response) {
                $scope.info = response.data;
                console.log(response);
            });
    }]);