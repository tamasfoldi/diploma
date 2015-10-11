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

module App {
    var typewritingapp: ng.IModule = angular.module("typewritingApp", ['ngRoute', 'ngResource', 'ngMaterial', 'timer'])
        .factory('LessonService', [
            '$resource', ($resource: ng.resource.IResourceService): App.ILessonService => {
                // Return the resource, include your custom actions
                return <App.ILessonService>$resource('/App/lessons/:lessonId.json', {}, {
                    query: { method: 'GET', params: { lessonId: 'lessons' }, isArray: true }
                });

            }
        ])
        .controller("MenuCtrl", ["$location", 'LessonService', MenuCtrl])
        .controller("LessonCtrl", ["$location", '$scope', 'LessonService', LessonCtrl])
        .controller("TimerCtrl", ['$interval', TimerCtrl])
        .directive("lessonResult", () => {
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
            }
        }])
        .directive('sideMenu', () => {            
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                controller: App.MenuCtrl,
                controllerAs: "MenuCtrl",
                templateUrl: 'App/partials/side-menu.html'
            }
        })
        .config(($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when("/", {
                    templateUrl: "App/templates/newLesson.html"                                                        
                })
                .when('/lesson', {
                    templateUrl: "App/lesson.html",
                    controller: App.LessonCtrl,
                    controllerAs: "LessonCtrl"
            })
        });
}