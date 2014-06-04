'use strict';
angular.module('timmee', [
    'ngRoute',
    'service',
    'controller'

]).
    config(["$routeProvider", function($routeProvider){
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller : 'TimelineCtrl'});
        $routeProvider.otherwise({redirectTo:'/home'});

    }]);
