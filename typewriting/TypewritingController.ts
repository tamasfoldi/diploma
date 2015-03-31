/// <reference path="../references.ts" />

module app {

    import Lesson = Model.Lesson;
    import LessonDrawer = View.LessonDrawer;
    import LessonService = app.LessonService;

    import ng = angular;

    export class TypewritingCtrl {

        modalService: ng.ui.bootstrap.IModalService;

        constructor(lessonService: LessonService, $location: ng.ILocationService, $modal: ng.ui.bootstrap.IModalService) {

            //this.modalService = $modal;
            //var lesson = lessonService.get();

            //var lessonDrawer: LessonDrawer = new LessonDrawer(lesson);
            //lessonDrawer.draw();
        }

        draw() {
            var modalInstance = this.modalService.open({
                templateUrl: 'typewriting/templates/newLesson.html',
                size: 'lg',
                resolve: {
                    //items: function () {
                    //    return $scope.items;
                    //}
                }
            });
        }
    }
}