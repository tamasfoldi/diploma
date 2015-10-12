/// <reference path="../../references.ts" />

describe('Lesson Controller Specs', () => {
    var lessonCtrl: App.LessonCtrl;
    var location: ng.ILocationService;
    var $httpBackend: ng.IHttpBackendService;
    var lessonService;
    var scope;

    beforeEach(angular.mock.module('typewritingApp'));

    beforeEach(() => {
        jasmine.addCustomEqualityTester((first, second) => {
            return angular.equals(first, second);
        });
    });

    beforeEach(() => inject(($location, $rootScope: ng.IRootScopeService, LessonService) => {
        location = $location;
        lessonService = LessonService;
        location.path('/lesson');
        location.search('id', 1);
        scope = $rootScope.$new();
        lessonCtrl = new App.LessonCtrl(location, scope, LessonService);
    }));

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/App/lessons/lesson1.json').respond(
            {
                "id": 1,
                "name": "Lesson 1",
                "text": "Text"
            }
        );
    }));

    it('should fetch lesson details', function () {
        $httpBackend.flush();
        expect(lessonCtrl.lesson).toEqual(
            {
                "id": 1,
                "name": "Lesson 1",
                "text": "Text"
            }
        );
    });
}); 