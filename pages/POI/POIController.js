// POI controller
angular.module("myApp")
.controller("POIController", function ($window,$scope, $http,$rootScope) {
    self = this;
    $scope.point=$rootScope.point;
    $scope.rank=function r() {
        alert("rank");
    };
    $scope.$watch(function() {
        return $rootScope.point;
    }, function() {
        $scope.point = $rootScope.point;
    }, true);
});