///<reference path="../references.ts"/>
//module App {
//    import TypewritingCtrl = App.TypewritingCtrl;
//    import MenuCtrl = App.MenuCtrl;
//    import LessonService = App.LessonService;
//    var typescrip: ng.IModule;
//    var typewritingapp: ng.IModule = angular.module("typewritingApp", ["ngRoute", "ui.bootstrap", "LocalStorageModule", "ui.event", "timer"])
//        .service("lessonService", LessonService.getInstance)
//        .controller("TypewritingCtrl", ["LessonService", "$location", "$scope", TypewritingCtrl])
//        .controller("MenuCtrl", ["LessonService", "$location", MenuCtrl])
//        .controller("TestCtrl", ["$scope", TestCtrl])
//        .directive("autofocus", ["$timeout", function ($timeout) {
//            return {
//                restrict: "A",
//                link: function ($scope, $element) {
//                    $timeout(function () {
//                        $element[0].focus();
//                    });
//                }
//            }
//        }])
//        .config(($routeProvider: ng.route.IRouteProvider) => {
//            $routeProvider
//                .when("/", {
//                    templateUrl: "App/menu.html",
//                    controller: App.MenuCtrl,
//                    controllerAs: "menu"
//                })
//                .when("/lesson", {
//                    templateUrl: "App/typewriting.html",
//                    controller: App.TypewritingCtrl,
//                    controllerAs: "typewriting",
//                });
//        });
//}
var App;
(function (App) {
    var typewritingapp = angular.module("typewritingApp", ['ngRoute', 'ngResource', 'ngMaterial', 'timer'])
        .factory('LessonService', [
        '$resource', function ($resource) {
            // Return the resource, include your custom actions
            return $resource('/App/lessons/:lessonId.json', {}, {
                query: { method: 'GET', params: { lessonId: 'lessons' }, isArray: true }
            });
        }
    ])
        .controller("MenuCtrl", ["$location", 'LessonService', App.MenuCtrl])
        .controller("LessonCtrl", ["$location", '$scope', 'LessonService', App.LessonCtrl])
        .controller("TimerCtrl", ['$interval', App.TimerCtrl])
        .directive("lessonResult", function () {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: 'App/partials/lesson-result.html'
        };
    })
        .directive("autofocus", ["$timeout", function ($timeout) {
            return {
                restrict: "A",
                link: function ($scope, $element) {
                    $timeout(function () {
                        $element[0].focus();
                    });
                }
            };
        }])
        .directive('sideMenu', function () {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: App.MenuCtrl,
            controllerAs: "MenuCtrl",
            templateUrl: 'App/partials/side-menu.html'
        };
    })
        .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
            templateUrl: "App/templates/newLesson.html"
        })
            .when('/lesson', {
            templateUrl: "App/lesson.html",
            controller: App.LessonCtrl,
            controllerAs: "LessonCtrl"
        });
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map