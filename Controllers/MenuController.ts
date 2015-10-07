/// <reference path="../references.ts" />
module App {
    //import LessonService = App.LessonService;
    //import Lesson = Model.Lesson;

    //export class MenuCtrl {
    //    private location: ng.ILocationService;
    //    private lessonService: LessonService;
    //    private lessons: Array<Lesson>;

    //    constructor(lessonService: LessonService, $location: ng.ILocationService) {    
    //        this.lessonService = lessonService;
    //        this.location = $location;    
    //        this.lessons = lessonService.getLessons();    
    //    }    

    //    loadLesson(id) {
    //        this.location.path('/lesson').search('id', id);
    //    }
    //}

    import ILesson = Model.ILesson;

    export class MenuCtrl {
        location: ng.ILocationService;
        lessons: ILesson[] = new Array<ILesson>();
        constructor($location: ng.ILocationService, LessonService: ng.resource.IResourceClass<ILesson>) {
            this.location = $location;
            this.lessons = LessonService.query();
        }

        loadLesson(id: number) {
            this.location.path('/lesson');
            this.location.search('id', id);
            
        }
    }
} 
