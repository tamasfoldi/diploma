/// <reference path="../../references.ts"/> 

module Model {
    import Statistic = Model.Statistic;

    export class User {
        id: number;
        name: string;
        personalStat: Statistic;

        constructor(id: number, name: string, personalStat: Statistic) {
            this.id = id;
            this.name = name;
            this.personalStat = personalStat;
        }
    }
}