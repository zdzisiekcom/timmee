'use strict';
angular.module('timmee', [
    'ngRoute',
    'timmee.controller'
]).
    config(["$routeProvider", function($routeProvider){
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller : 'TimelineCtrl'});
        $routeProvider.otherwise({redirectTo:'/home'});

    }]);
