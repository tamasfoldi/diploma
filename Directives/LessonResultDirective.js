//http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#backtothebasics read more here
var App;
(function (App) {
    var Directives;
    (function (Directives) {
        var LessonResultDirective = (function () {
            function LessonResultDirective() {
                this.transclude = true;
                this.templateUrl = '/App/partials/lesson-result.html';
                this.scope = {};
                // It's important to add `link` to the prototype or you will end up with state issues.
                // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
                LessonResultDirective.prototype.link = function (scope, element, attrs) {
                    /*handle all your linking requirements here*/
                };
            }
            LessonResultDirective.Factory = function () {
                var directive = function () {
                    return new LessonResultDirective();
                };
                directive['$inject'] = [];
                return directive;
            };
            return LessonResultDirective;
        })();
        Directives.LessonResultDirective = LessonResultDirective;
    })(Directives = App.Directives || (App.Directives = {}));
})(App || (App = {}));
//# sourceMappingURL=LessonResultDirective.js.map