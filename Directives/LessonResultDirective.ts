//http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#backtothebasics read more here

module App.Directives {
    export class LessonResultDirective {
        public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
        public transclude = true;
        public templateUrl = '/App/partials/lesson-result.html';
        public scope = {};

        constructor(/*list of dependencies*/) {
            // It's important to add `link` to the prototype or you will end up with state issues.
            // See http://blog.aaronholmes.net/writing-angularjs-directives-as-typescript-classes/#comment-2111298002 for more information.
            LessonResultDirective.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
                /*handle all your linking requirements here*/
            };
        }

        public static Factory() {
            var directive = () => {
                return new LessonResultDirective();
            };

            directive['$inject'] = [];

            return directive;
        }
    }
}
