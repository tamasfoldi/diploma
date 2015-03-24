/// <reference path="../../references.ts"/> 

module Model {
    import Statistic = Model.Statistic;

    export class Lesson {
        id: number;
        name: string;
        statToComplete: Statistic;

        constructor(id: number, name: string, statToComplete: Statistic) {
            this.id = id;
            this.name = name;
            this.statToComplete = statToComplete;
        }
    }
} 