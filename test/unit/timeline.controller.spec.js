'use strict';

describe('Timeline controller', function(){

    var testTimelineData = {

        allEvent : [
            {id:1, description:'Im learning angular js', start_data: '2014-05-01 : 14:00', end_data: '2014-05-01 : 16:00', project: 'AngularIsCool', task : '#34353'},
            {id:2, description:'Setting my first REST service', start_data: '2014-05-02 : 10:10', end_data: '2014-05-01 : 16:01', project: 'SpringBoot', task : '#44553'},
            {id:3, description:'How to write a test', start_data: '2014-05-04 : 09:10', end_data: '2014-05-04 : 13:55', project: 'xUnit', task : '#54353'}
        ]
    };

    var createController;
    var scope;
    var timelineService;

    beforeEach(module('controller'));
    beforeEach(module('service'));
    beforeEach(inject(function($controller, $rootScope, TimelineService) {
        scope = $rootScope.$new();
        timelineService = TimelineService;
        createController = function() {
            var ctrl = $controller('TimelineCtrl',
                {
                    $scope:scope,
                    TimelineService : {
                        findAll : function(callback){
                            callback(testTimelineData.allEvent);
                        }
                    }
                }
            );
            return ctrl;
        }}));

    it('should create "timeline" model with 3 time events ', function(){
       //when
        createController();
        //then
        expect(scope.timeline.length).toBe(3);
    });

});