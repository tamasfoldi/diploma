///<reference path='references.ts'/>
module app {
    var typewritingapp: ng.IModule = angular.module('typewritingApp', ['ngRoute', 'ui.bootstrap', 'LocalStorageModule'])
        .service('lessonService', app.LessonService.getInstance)
        .config(($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/', {
                templateUrl: 'menu/menu.html',
                controller: app.MenuCtrl,
                controllerAs: "menu"
            })
                .when('/lesson', {
                templateUrl: 'typewriting/typewriting.html',
                controller: app.TypewritingCtrl,
                controllerAs: "typewriting",
            });
    });
}