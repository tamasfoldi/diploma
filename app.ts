///<reference path='references.ts'/>
module app {
    var typewritingapp: ng.IModule = angular.module('typewritingApp', ['ngRoute', 'ui.bootstrap', 'LocalStorageModule'])
        .service('lessonService', app.LessonService)
        .config(($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/', {
                templateUrl: 'menu/menu.html',
                controller: app.MenuCtrl,
                controllerAs: "menu"
            })
                .when('/lesson', {
                redirectTo: function (routeParams, path, search) {
                    return "/lesson?id="+search.id;
                }
            });
    });
}