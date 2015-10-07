var App;
(function (App) {
    var TimeCtrl = (function () {
        function TimeCtrl($interval, $scope) {
            this.totalElapsedMs = 0;
            this.elapsedMs = 0;
            this.interval = $interval;
            this.scope = $scope;
            this.start();
        }
        TimeCtrl.prototype.start = function () {
            if (!this.timerPromise) {
                this.startTime = new Date();
                var starTime = this.startTime;
                var elapsedMs = 0;
                this.timerPromise = this.interval(function () {
                    var now = new Date();
                    //$scope.time = now;
                    elapsedMs = now.getTime() - starTime.getTime();
                }, 31);
            }
        };
        TimeCtrl.prototype.stop = function () {
            if (this.timerPromise) {
                this.interval.cancel(this.timerPromise);
                this.timerPromise = undefined;
                this.totalElapsedMs += this.elapsedMs;
                this.elapsedMs = 0;
            }
        };
        TimeCtrl.prototype.reset = function () {
            this.startTime = new Date();
            this.totalElapsedMs = this.elapsedMs = 0;
        };
        TimeCtrl.prototype.getElapsedMs = function () {
            return this.totalElapsedMs + this.elapsedMs;
        };
        return TimeCtrl;
    })();
    App.TimeCtrl = TimeCtrl;
})(App || (App = {}));
//# sourceMappingURL=TimeController.js.map