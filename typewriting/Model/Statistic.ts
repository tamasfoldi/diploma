/// <reference path="../../references.ts"/> 

module Model {
    export class Statistic {
        nofMistakes: number;
        typingSpeed: number;

        constructor(nofMistakes: number, typingSpeed: number) {
            this.nofMistakes = nofMistakes;
            this.typingSpeed = typingSpeed;
        }
    }
}