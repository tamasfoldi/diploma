/// <reference path="../references.ts" />
module app {
    import Lesson = Model.Lesson;
    import LessonService = app.LessonService;

    export class MenuCtrl {
        private location: ng.ILocationService;
        private lessonService: LessonService;
        private lessonDict = [];

        constructor($location: ng.ILocationService, lessonService: LessonService) {    
            this.lessonService = lessonService;
            this.location = $location;    
            var lessons = lessonService.getLessons().values();    
            for (var i = lessons.length-1; i >= 0; i--) {
                this.lessonDict.push({ id: lessons[i].id, name: lessons[i].name });
            }
        }    

        loadLesson($index) {
            this.location.path('/lesson').search('id', $index);
        }
    }
} 