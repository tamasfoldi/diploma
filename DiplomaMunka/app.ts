///<reference path='references.ts'/>
module app {
    import LessonText = Model.LessonText;

    var lessonText = new LessonText("This text should be typed");

    var typewritingApp = angular.module('typewritingApp', []);

    typewritingApp.controller('TypewritingCtrl', function ($scope) {
        $scope.textToType = lessonText.text;
    });
}