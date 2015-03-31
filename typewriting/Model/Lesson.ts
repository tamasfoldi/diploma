/// <reference path="../../references.ts"/> 

module Model {

    export class Lesson {
        id: number;
        name: string;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }
} 