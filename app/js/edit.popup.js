'use strict';

var editPopup = angular.module('popup',['service', 'mgcrea.ngStrap.modal']);
editPopup.factory("EditPopup", ['TimelineService','$modal',function(TimelineService, $modal) {

    var myModal = $modal({title: 'My Title', content: 'My Content', show: true});
    var myOtherModal = $modal({scope: $scope, template: 'partials/edit.html', show: false});
    $scope.showModal = function() {
        myOtherModal.$promise.then(myOtherModal.show);
    };

}]);

