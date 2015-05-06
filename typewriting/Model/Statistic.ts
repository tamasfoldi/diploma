/// <reference path="../../references.ts"/> 

module Model {
    export class Statistic {
        private nofMistakes: number = 0;
        private typingSpeed: number = 0;
        private time: number = 0;
        private nofCorrectKeyPresses: number = 0;

        constructor() {
        }

        getNofMistakes(): number {
            return this.nofMistakes;
        }

        getNofKeyPresses(): number {
            return this.nofMistakes + this.nofCorrectKeyPresses;
        }

        getTypingSpeed(): number {
            return this.typingSpeed;
        }

        calculateTypingSpeed(time: number) {
            console.log(this.getNofKeyPresses() / time)
            console.log(60000 / time)
            console.log(time);
            this.typingSpeed = (this.getNofKeyPresses() / time) *1000 * (1000 / time);
        }

        getNofCorrectKeyPresses(): number {
            return this.nofCorrectKeyPresses;
        }

        increaseNofCorrectKeyPresses() {
            this.nofCorrectKeyPresses++;
        }

        increasNofMistakes() {
            this.nofMistakes++;
        }

        getTime(): number {
            return this.time;
        }

        setTime(time: number) {
            this.time = time;
        }
    }
}