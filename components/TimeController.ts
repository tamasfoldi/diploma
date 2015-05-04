module app {
    export class TimeCtrl {

        private interval: ng.IIntervalService;
        private scope: ng.IScope;
        private totalElapsedMs: number;
        private startTime: Date;
        private timerPromise: ng.IPromise<any>;
        private elapsedMs: number;

        constructor($interval: ng.IIntervalService, $scope: ng.IScope) {
            this.totalElapsedMs = 0;
            this.elapsedMs = 0;
            this.interval = $interval;
            this.scope = $scope;
            this.start();
        }

        start() {
            if (!this.timerPromise) {
                this.startTime = new Date();
                var starTime: Date = this.startTime;                
                var elapsedMs: number = 0;
                console.log(this.scope);
                this.timerPromise = this.interval(function () {
                    var now: Date = new Date();
                    //$scope.time = now;
                    elapsedMs = now.getTime() - starTime.getTime();
                    
                }, 31);
            }
        }

        stop() {
            if (this.timerPromise) {
                this.interval.cancel(this.timerPromise);
                this.timerPromise = undefined;
                this.totalElapsedMs += this.elapsedMs;
                this.elapsedMs = 0;
            }
        }

        reset() {
            this.startTime = new Date();
            this.totalElapsedMs = this.elapsedMs = 0;
        }

        getElapsedMs() {
            return this.totalElapsedMs + this.elapsedMs;
        }
    }
}
