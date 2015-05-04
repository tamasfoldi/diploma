///<reference path='references.ts'/>
module app {
    var typewritingapp: ng.IModule = angular.module('typewritingApp', ['ngRoute', 'ui.bootstrap', 'LocalStorageModule', 'ui.event', 'timer'])
        .service('lessonService', app.LessonService.getInstance)
        .controller('TypewritingCtrl', ['LessonService', '$location', '$scope', TypewritingCtrl])
        .controller('MenuCtrl', ['LessonService', '$location', MenuCtrl])
        .controller('TimeCtrl', ['$interval', '$scope', TimeCtrl])
        .directive('autofocus', ['$timeout', function ($timeout) {
        return {
            restrict: 'A',
            link: function ($scope, $element) {
                $timeout(function () {
                    $element[0].focus();
                });
            }
        }
    }])
        .config(($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when('/', {
            templateUrl: 'menu/menu.html',
            controller: app.MenuCtrl,
            controllerAs: "menu"
        })
            .when('/timer', {
            templateUrl: 'timer.html',
            controller: app.TimeCtrl,
            controllerAs: "timer"
        })
            .when('/lesson', {
            templateUrl: 'typewriting/typewriting.html',
            controller: app.TypewritingCtrl,
            controllerAs: "typewriting",
        });
        });
}