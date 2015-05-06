/// <reference path="../../references.ts"/> 

module Model {
    import Statistic = Model.Statistic;
    import Lesson = Model.Lesson;

    export class CompletedLesson extends Lesson {
        user: User;
        typedText: string;
        completedStat: Statistic;
    }
}  