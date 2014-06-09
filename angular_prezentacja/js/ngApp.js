angular.module('ngApp', [])                 
    .controller('ScopeController',['$scope', function($scope){
        $scope.lensearch = 6;
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


angular.module('ngApp').filter('len', function() {

    return function(input, minlength) {

    var input  = input || Array();

    return input.filter(function(el){
         return (el.length >= minlength);
    });
}});


angular.module('ngApp');