'use strict';

describe('Timeline service', function(){

    var $httpBackend;
    var TimelineService;

    var testValue = [
        {id:1, description:'Im learning angular js', start_data: '2014-05-01 : 14:00', end_data: '2014-05-01 : 16:00', project: 'AngularIsCool', task : '#34353'}
    ]

    beforeEach(module('service'));
    beforeEach(inject(function(_$httpBackend_, _TimelineService_){
        $httpBackend = _$httpBackend_;
        TimelineService = _TimelineService_;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return time line entries', function(){
        //given
        $httpBackend.expectGET('/log/entries').respond(testValue);
        //when
        var entries = TimelineService.findAll(function(data){
            //then
            expect(data.length).toBe(1);
        });
        $httpBackend.flush();
    });

});