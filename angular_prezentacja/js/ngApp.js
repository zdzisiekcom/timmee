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

    }])

    .controller('PhonesCtrl',['$scope','PhonesService', function($scope, PhonesService){
        PhonesService.getAll().then(function(result){
            $scope.phones = result.data;
        });

        $scope.add = function(phone){

            var phone = {id: phone.id, name:phone.name, snippet:'timmeee'};

            PhonesService.save(phone).then(function(result){
                $scope.phones = result.data;
            });

            $scope.phone = {};
        }
    }])

    .factory('PhonesService',['$http', function($http){
        var phonesService = {};

        phonesService.getAll = function(){
            var promise = $http.get('/timmee/angular_prezentacja/json/phones.json');
            return promise;
        }

        phonesService.save = function(phone) {
            var promise = $http.post('/timmee/angular_prezentacja/json/phones.json', phone);
            return promise;
        }

        return phonesService;
    }]);


angular.module('ngApp').filter('len', function() {

    return function(input, minlength) {

    var input  = input || Array();

    return input.filter(function(el){
         return (el.length >= minlength);
    });
}});


angular.module('ngApp');
