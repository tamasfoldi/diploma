/// <reference path="../../references.ts"/> 

module Model {

    export class Lesson {
        private id: number;
        private name: string;
        private text: LessonText

        constructor(id: number, name: string, text: LessonText) {
            this.id = id;
            this.name = name;
            this.text = text;
        }

        public getId(): number {
            return this.id;
        }

        public setId(id: number) {
            this.id = id;
        }

        public getName(): string {
            return this.name;
        }

        public setName(name: string) {
            this.name = name;
        }

        public getText(): LessonText {
            return this.text;
        }

        public setText(text: LessonText) {
            this.text = text;
        }
    }
} 