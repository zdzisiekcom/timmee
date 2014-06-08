angular.module('ngApp', [])
    .controller('ScopeController',['$scope',function($scope){
        $scope.elements = ['pierwszy','drugi','trzeci'];

        $scope.add = function(){
            $scope.elements.push($scope.element);
            $scope.element = "";

        };
    }])

    .controller('ScopeFirstController',['$scope', function($scope){
        $scope.data = {message:"juz jestem"};
    }])

    .controller('ScopeThreeController',['$scope', function($scope){

    }]);
