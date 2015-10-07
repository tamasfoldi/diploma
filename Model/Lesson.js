/// <reference path="../references.ts"/> 
var Model;
(function (Model) {
    var Lesson = (function () {
        function Lesson(id, name, text) {
            this.statistic = new Model.Statistic();
            this.id = id;
            this.name = name;
            this.text = text;
        }
        Lesson.prototype.getId = function () {
            return this.id;
        };
        Lesson.prototype.getName = function () {
            return this.name;
        };
        Lesson.prototype.getText = function () {
            return this.text;
        };
        Lesson.prototype.getStatistic = function () {
            return this.statistic;
        };
        Lesson.fromJson = function (json) {
            var data = JSON.parse(json);
            return new Lesson(data.id, data.name, data.text);
        };
        return Lesson;
    })();
    Model.Lesson = Lesson;
})(Model || (Model = {}));
//# sourceMappingURL=Lesson.js.map