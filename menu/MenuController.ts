/// <reference path="../references.ts" />
module app {
    import Lesson = Model.Lesson;
    import LessonService = app.LessonService;

    export class MenuCtrl {
        private location: ng.ILocationService;
        private lessonService: LessonService;
        private lessons: Array<Lesson>;

        constructor(lessonService: LessonService, $location: ng.ILocationService) {    
            this.lessonService = lessonService;
            this.location = $location;    
            this.lessons = lessonService.getLessons();    
        }    

        loadLesson(id) {
            this.location.path('/lesson').search('id', id);
        }
    }
} 