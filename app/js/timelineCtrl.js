'use strict';

var timelineCtrl = angular.module('controller', ['service', 'popup']);
timelineCtrl.controller("TimelineCtrl", ['$scope', 'TimelineService', function ($scope, TimelineService) {
    $scope.timeEvent = {};
    var self = this;
    self.findAll = function () {
        TimelineService.findAll(function (data) {
            $scope.timeline = data;
        });
    };
    $scope.addEvent = function (timeEvent) {
        TimelineService.save(timeEvent, function (result) {
            $scope.timeline.push(result);
            $scope.timeEvent = {};
            $scope.showAddPanel = false;
        });
    }
    self.findAll();

}]);
