angular.module('ngApp', [])
    .controller('ScopeController',['$scope',function($scope){

        $scope.elements = ['pierwszy','drugi','trzeci'];

        $scope.add = function(){
            $scope.elements.push($scope.element);
            $scope.element = "";
        };
    }]);