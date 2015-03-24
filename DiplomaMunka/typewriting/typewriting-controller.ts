/// <reference path="../references.ts"/>

module app {

    export class TypeWriteCtrl {

        timer: JQueryTimer;

        startTimer() {
            this.timer.set(50);
        }

        getTimer(): JQueryTimer {
            return this.timer;
        }

    }
}