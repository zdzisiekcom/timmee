'use strict';
var timelineCtrl = angular.module("timmee.controller",[]);
timelineCtrl.controller("TimelineCtrl", function($scope) {
    $scope.timeline = [
        {'date' : '2014-05-21', 'tag' : 'angularjs', 'description' : 'learning this cool stuff', 'timeSpend' : '33' },
        {'date' : '2014-05-22', 'tag' : 'angularjs', 'description' : 'I know what is scope' , 'timeSpend' : '68'},
        {'date' : '2014-05-23', 'tag' : 'angularjs', 'description' : 'Weee...my first contriller' , 'timeSpend' : '123' }
    ];
});
