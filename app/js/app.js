'use strict';
angular.module('timmee', [
    'ngRoute',
    'service',
    'controller',
    'popup',
    'mgcrea.ngStrap'

]).
    config(["$routeProvider", function($routeProvider){
        $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller : 'TimelineCtrl'});
        $routeProvider.otherwise({redirectTo:'/home'});

    }]);
