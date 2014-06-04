'use strict';

var timelineCtrl = angular.module('controller',['service']);
timelineCtrl.controller("TimelineCtrl", ['$scope','TimelineService',function($scope, TimelineService) {
    TimelineService.findAll(function(data){
        $scope.timeline = data;
    });
    $scope.orderProp = 'timeSpend';

}]);
