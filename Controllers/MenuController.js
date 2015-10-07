/// <reference path="../references.ts" />
var App;
(function (App) {
    var MenuCtrl = (function () {
        function MenuCtrl($location, LessonService) {
            this.lessons = new Array();
            this.location = $location;
            this.lessons = LessonService.query();
        }
        MenuCtrl.prototype.loadLesson = function (id) {
            this.location.path('/lesson');
            this.location.search('id', id);
        };
        return MenuCtrl;
    })();
    App.MenuCtrl = MenuCtrl;
})(App || (App = {}));
//# sourceMappingURL=MenuController.js.map