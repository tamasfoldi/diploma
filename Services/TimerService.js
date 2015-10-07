var App;
(function (App) {
    var TimerService = (function () {
        function TimerService($interval) {
            this.totalElapsedMs = 0;
            this.elapsedMs = 0;
            this.interval = $interval;
            this.start();
        }
        TimerService.prototype.start = function () {
            if (!this.timerPromise) {
                this.startTime = new Date();
                var starTime = this.startTime;
                var elapsedMs = 0;
                this.timerPromise = this.interval(function () {
                    var now = new Date();
                    elapsedMs = now.getTime() - starTime.getTime();
                }, 31);
            }
        };
        TimerService.prototype.stop = function () {
            if (this.timerPromise) {
                this.interval.cancel(this.timerPromise);
                this.timerPromise = undefined;
                this.totalElapsedMs += this.elapsedMs;
                this.elapsedMs = 0;
            }
        };
        TimerService.prototype.reset = function () {
            this.startTime = new Date();
            this.totalElapsedMs = this.elapsedMs = 0;
        };
        TimerService.prototype.getElapsedMs = function () {
            return this.totalElapsedMs + this.elapsedMs;
        };
        return TimerService;
    })();
    App.TimerService = TimerService;
})(App || (App = {}));
//# sourceMappingURL=TimerService.js.map