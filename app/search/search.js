'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/search.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location) {
    $scope.msg = "from controller 1";
    $scope.searchOption = "all";
    $scope.loading = false;

    $scope.searchFor = function () {
        console.log($scope.search);
        var request = "https://api.discogs.com/database/search?q=" + $scope.search + "&page=1&per_page=10";
        if($scope.searchOption != "all"){
            request+= "&type=" + $scope.searchOption;
        }
        $scope.loading = true;
        $scope.searchResults = null;
        $http.get(request + sign)
            .then(function(response) {
                $scope.loading = false;
                $scope.searchResults = response.data.results;
                console.log(response);
            });
    };
    $scope.moreInfo = function (type, id) {
        var baseURL = "https://api.discogs.com";
        switch (type){
            case "release":
                $rootScope.request  = baseURL + "/releases/" + id + "?" + sign;
                $location.path('release');
                break;
            case "artist":
                $rootScope.request  = baseURL + "/artists/" + id + "?" + sign;
                $location.path('artist');
                break;
            case "label":
                $rootScope.request  = baseURL + "/labels/" + id + "?" + sign;
                $location.path('label');
                break;
            case "master":
                $rootScope.request  = baseURL + "/masters/" + id + "?" + sign;
                $location.path('master');
                break;
        }
    };
}]);