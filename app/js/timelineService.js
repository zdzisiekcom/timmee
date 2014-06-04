'use strict';
var service = angular.module('service',[]);
service.factory('TimelineService',['$http', function($http){

    var timeservice = {};

        timeservice.findAll = function(callback){
            $http.get('/log/entries').success(callback);
     };

     return timeservice;
}]);
