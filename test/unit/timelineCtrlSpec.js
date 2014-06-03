'use strict';

describe('Timeline controller', function(){

    var createController;
    var scope;

    beforeEach(module('timmee.controller'));
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        createController = function() {
            var ctrl = $controller('TimelineCtrl', {$scope:scope});
            return ctrl;
        }}));

    it('should create "timeline" model with 3 time events ', function(){
       //when
        createController();
        //then
        expect(scope.timeline.length).toBe(3);
    });
});