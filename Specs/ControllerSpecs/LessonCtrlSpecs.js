/// <reference path="../../references.ts" />
describe('Lesson Controller Specs', function () {
    var lessonCtrl;
    var location;
    var $httpBackend;
    var lessonService;
    var scope;
    beforeEach(angular.mock.module('typewritingApp'));
    beforeEach(function () {
        jasmine.addCustomEqualityTester(function (first, second) {
            return angular.equals(first, second);
        });
    });
    beforeEach(function () { return inject(function ($location, $rootScope, LessonService) {
        location = $location;
        lessonService = LessonService;
        location.path('/lesson');
        location.search('id', 1);
        scope = $rootScope.$new();
        lessonCtrl = new App.LessonCtrl(location, scope, LessonService);
    }); });
    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/App/lessons/lesson1.json').respond({
            "id": 1,
            "name": "Lesson 1",
            "text": "Text"
        });
    }));
    it('should fetch lesson details', function () {
        $httpBackend.flush();
        expect(lessonCtrl.lesson).toEqual({
            "id": 1,
            "name": "Lesson 1",
            "text": "Text"
        });
    });
});
//# sourceMappingURL=LessonCtrlSpecs.js.map