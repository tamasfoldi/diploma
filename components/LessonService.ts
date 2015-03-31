///<reference path='../references.ts' />

module app {
    import Lesson = Model.Lesson;

    export class LessonService {
        lesson: Lesson = null;

        constructor(){//private localStorageService: ng.local.storage.ILocalStorageService<string>) {
        }

        getLesson(id: number): Lesson {
            //if (this.project == null) {
            //    var projectObj = JSON.parse(localStorage.getItem("project"));
            //    this.project = new Project();
            //    if (projectObj != null) {
            //        this.project.deserialize(projectObj);
            //        JSON.retrocycle(this.project);
            //    }
            //    console.log(this.project)
            //}
            this.lesson.id = id;
            this.lesson.name = "Lesson" + id.toString();
            return this.lesson;
        }

        hashLesson(l: Lesson): string {
            return "Lesson:" + l.id + "," + l.name;
        }

        lessonEqual(l1: Lesson, l2: Lesson): boolean {
            return l1.id === l2.id && l1.name === l2.name;
        }

        getLessons(): IHashSet<Lesson> {
            var ret = new HashSet<Lesson>({ hashCode: this.hashLesson, equals: this.lessonEqual });
            for (var i = 0; i < 10; i++) {           
                ret.add(new Lesson(i, "Lesson" + i.toString()));
            }
            return ret;
        }

        set(lesson: Lesson): void {
            //localStorage.setItem("project", JSON.stringify(JSON.decycle(project)));
            //console.log(localStorage.getItem("project"));
            this.lesson = lesson;
        }


    }
}