///<reference path='../../references.ts'/>

module View {
    import Lesson = Model.Lesson;

    export class LessonDrawer {
        lesson: Lesson;
        private static _instance: LessonDrawer = null;

        constructor(lesson: Lesson) {
            LessonDrawer._instance = this;
            this.lesson = lesson;
        }

        draw() {
            console.log("LessonDrawer");
        }
    }
} 