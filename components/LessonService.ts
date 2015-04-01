///<reference path='../references.ts' />

module app {
    import Lesson = Model.Lesson;
    import LessonText = Model.LessonText;

    export class LessonService {
        private static _instance: LessonService = null;
        private lessons: Array<Lesson> = new Array<Lesson>();

        constructor() {//private localStorageService: ng.local.storage.ILocalStorageService<string>) { 
            if (LessonService._instance) {
                throw new Error("Error: Instantiation failed: Use LessonService.getInstance() instead of new.");
               
            }
            LessonService._instance = this;
        }

        public static getInstance(): LessonService {
            if (LessonService._instance === null) {
                LessonService._instance = new LessonService();
                LessonService._instance.initLessons();
            }
            return LessonService._instance;
        }

        initLessons() {
            for (var i = 0; i < 10; i++) {
                this.lessons[i] = new Lesson(i, "Lesson" + i.toString(), new LessonText("This text should be typed"));
            }
        }

        hashLesson(l: Lesson): string {
            return "Lesson:" + l.getId() + "," + l.getName();
        }

        lessonEqual(l1: Lesson, l2: Lesson): boolean {
            return l1.getId() === l2.getId() && l1.getName() === l2.getName();
        }

        getLesson(id: number): Lesson {
            console.log(this.lessons.length);
            if (id < this.lessons.length) {
                return this.lessons[id];
            }
        } 
        
        setLesson(lesson: Lesson, id: number): void {
            if (id < this.lessons.length) {
                this.lessons[id] = lesson;
            }
        }       

        getLessons(): Array<Lesson> {
            return this.lessons
        }

    }
}