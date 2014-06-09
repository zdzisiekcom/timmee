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

    .controller('serviceControler',['$scope', 'artistService', function($scope,artistService){
        $scope.artist = artistService.getArtist();
        $scope.$watch('artist', function(newval, oldval){
            artistService.setArtist(newval)
        });
    }])
    .controller('secondServiceControler',['$scope', 'artistService', function($scope,artistService){
        $scope.checkArtist = function() {
            alert(artistService.getArtist());
        };
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
    }])

    .service('artistService', function(){
        
        var artist = 'Manson'

        this.getArtist = function(){
            return artist;
        }

        this.setArtist = function(a){
            artist = a;
            console.log('New artist: ' + artist);
        }
    });


angular.module('ngApp').filter('len', function() {

    return function(input, minlength) {

    var input  = input || Array();

    return input.filter(function(el){
         return (el.length >= minlength);
    });
}});



