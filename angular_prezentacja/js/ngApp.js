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
    	
    	$scope.phone = {
    			id : '44',
    			name : 'Nexus 5'
    	}
    	
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
            var promise = $http.get('/timmee/json/phones.json');
            return promise;
        }

        phonesService.save = function(phone) {
            var promise = $http.post('/timmee/json/phones.json', phone);
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


angular.module('ngApp').directive('myPhoneName', function() {
    return {
      restrict : 'AE',
      template: 'Telefon: {{phone.name}} ({{phone.id}})'
    };
  });

angular.module('ngApp').directive('myPhone', function() {
	return {
		restrict : 'AE',
		scope: {
        	phoneInfo: '=phone'
      	},
		template: 'Telefon: {{phoneInfo.name}} ({{phoneInfo.id}})'
	};
});



angular.module('ngApp').controller('timeController', ['$scope', function($scope) {
  $scope.format = 'yyyy-MM-dd HH:mm:ss';
}])
.directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {

  function link(scope, element, attrs) {
    var format,
        timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.myCurrentTime, function(value) {
      format = value;
      updateTime();
    });

    element.on('$destroy', function() {
      $interval.cancel(timeoutId);
    });

    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function() {
      updateTime(); // update DOM
    }, 1000);
  }

  return {
    link: link
  };
}]);
