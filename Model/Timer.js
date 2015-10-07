var Model;
(function (Model) {
    var Timer = (function () {
        function Timer($interval) {
            this.totalElapsedMs = 0;
            this.elapsedMs = 0;
            this.interval = $interval;
        }
        Timer.prototype.start = function () {
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
        Timer.prototype.stop = function () {
            if (this.timerPromise) {
                this.interval.cancel(this.timerPromise);
                this.timerPromise = undefined;
                this.totalElapsedMs += this.elapsedMs;
                this.elapsedMs = 0;
            }
        };
        Timer.prototype.reset = function () {
            this.startTime = new Date();
            this.totalElapsedMs = this.elapsedMs = 0;
        };
        Timer.prototype.getElapsedMs = function () {
            return this.totalElapsedMs + this.elapsedMs;
        };
        return Timer;
    })();
    Model.Timer = Timer;
})(Model || (Model = {}));
//# sourceMappingURL=Timer.js.map