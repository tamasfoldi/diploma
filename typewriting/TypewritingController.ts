/// <reference path="../references.ts" />

module app {

    import Lesson = Model.Lesson;
    import LessonService = app.LessonService;


    export class TypewritingCtrl {
        
        private location: ng.ILocationService;
        private lessonService: LessonService;
        private lessonId: number;
        private lesson: Lesson;


        constructor(lessonService: LessonService, $location: ng.ILocationService) {
            this.location = $location;
            this.lessonService = lessonService;
            this.lessonId = this.location.search()["id"];
            this.lesson = lessonService.getLesson(this.lessonId);
        }

        draw() {
            //var modalInstance = this.modalService.open({
            //    templateUrl: 'typewriting/templates/newLesson.html',
            //    size: 'lg',
            //    resolve: {
            //        //items: function () {
            //        //    return $scope.items;
            //        //}
            //    }
            //});
        }
    }
}