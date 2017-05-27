/**
 * Created by Philip
 *              on 2017-05-25.
 */
'use strict';

angular.module('myApp.artistReleases', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/artistReleases', {
            templateUrl: 'artistReleases/artistReleases.html',
            controller: 'ArtistReleasesCtrl'
        });
    }])

    .controller('ArtistReleasesCtrl', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location) {
        $scope.sortOrder = "asc";
        $scope.page = $location.search().page;
        console.log($scope.page);

        var request = $rootScope.request;
        request += "&per_page=30&page=" + $scope.page;

        if($scope.sort != undefined){
            console.log($scope.sort);
            request += "&sort=" + $scope.sort;
        }

        console.log(request);
        $scope.loading = true;
        $http.get(request)
            .then(function(response) {
                $scope.loading = false;
                $scope.info = response.data;

                var pages = [];
                for (var i = 0; i < response.data.pagination.pages; i++) {
                    pages.push(i+1);
                }

                $scope.pages = pages;

                console.log(response);
            });

        $scope.moreInfo = function (id, type) {
            var baseURL = "https://api.discogs.com";
            switch (type){
                case "release":
                    $rootScope.request  = baseURL + "/releases/" + id + "?" + sign;
                    $location.path('release');
                    break;
                case "master":
                    $rootScope.request  = baseURL + "/masters/" + id + "?" + sign;
                    $location.path('master');
                    break;
            }
        };

        $scope.sortBy = function () {
            request = $rootScope.request;
            request += "&per_page=30&page=1";

            if($scope.sort != undefined){
                request += "&sort=" + $scope.sort;
            }

            if($scope.sortOrder != undefined){
                request += "&sort_order=" + $scope.sortOrder;
            }

            $scope.loading = true;
            $scope.info = null;
            $http.get(request)
                .then(function(response) {
                    $scope.loading = false;
                    $scope.info = response.data;

                    var pages = [];
                    for (var i = 0; i < response.data.pagination.pages; i++) {
                        pages.push(i+1);
                    }

                    $scope.pages = pages;

                    console.log(response);
                });
        };

        $scope.goToPage = function (pageNum) {
            request = $rootScope.request;
            request += "&per_page=30&page=" + pageNum;

            if($scope.sort != undefined){
                console.log($scope.sort);
                request += "&sort=" + $scope.sort;
            }
            $scope.loading = true;
            $scope.info = null;
            $http.get(request)
                .then(function(response) {
                    $scope.loading = false;
                    $scope.info = response.data;

                    var pages = [];
                    for (var i = 0; i < response.data.pagination.pages; i++) {
                        pages.push(i+1);
                    }

                    $scope.pages = pages;

                    console.log(response);
                });
        };
    }]);