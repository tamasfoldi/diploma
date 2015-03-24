/// <reference path="../../references.ts"/> 

module Model {

    export class LessonText {
        text: string;

        constructor(text: string) {
            this.text = text;
        }

        getLength(): number {
            return this.text.length;
        }
    }
} 