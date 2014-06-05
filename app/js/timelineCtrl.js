'use strict';

var timelineCtrl = angular.module('controller',['service', 'popup']);
timelineCtrl.controller("TimelineCtrl", ['$scope','TimelineService','EditPopup',function($scope, TimelineService, EditPopup) {
    TimelineService.findAll(function(data){
        $scope.timeline = data;
    });

    $scope.show = function(){
        EditPopup.show();
    }

}]);
