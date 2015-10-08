///// <reference path="../references.ts" />

//module App {
//    import LessonService = App.LessonService;
//    import Lesson = Model.ILesson;

//    export class TypewritingCtrl {

//        private location: ng.ILocationService;
//        private lessonService: LessonService;
//        private lessonId: number;
//        private lesson: Lesson;
//        private typedText: string;
//        private scope: any;
//        private isDisabled: boolean;

//        constructor(lessonService: LessonService, $location: ng.ILocationService, $scope: ng.IScope) {
//            this.location = $location;
//            this.lessonService = lessonService;
//            this.lessonId = this.location.search()["id"];
//            this.lesson = lessonService.getLesson(this.lessonId);
//            this.scope = $scope;
//            this.typedText = "";
//            this.scope.$on('timer-stopped', function (event, data) {
//                var scope: any = event.currentScope
//                scope.typewriting.lesson.getStatistic().calculateTypingSpeed(data.millis);
//                scope.typewriting.lesson.getStatistic().setTime(data.millis);
//            });
//        }

//        keypressHandling($event) {
//            var char: string = String.fromCharCode($event.which);
//            var tempTyped = this.typedText + char;
//            if (tempTyped != this.lesson.getText().substr(0, tempTyped.length)) {
//                $event.preventDefault();
//                this.lesson.getStatistic().increasNofMistakes();
//            }
//            else {
//                this.lesson.getStatistic().increaseNofCorrectKeyPresses();
//                if (tempTyped == this.lesson.getText()[0]) { //at the first character the timer starts
//                    this.scope.$broadcast('timer-start');
//                }
//                if (tempTyped == this.lesson.getText()) { //at the last character the timer stops and the textarea sets to disabled
//                    this.typedText = tempTyped;
//                    this.isDisabled = true;
//                    this.scope.$broadcast('timer-stop');
//                }
//            }
//        }

//        getIsDisabled(): boolean {
//            return this.isDisabled;
//        }
//    }
//}

module App {
    import ILesson = Model.ILesson;

    export class LessonCtrl {
        location: ng.ILocationService;
        lesson: ILesson;
        typedText: string;

        constructor($location: ng.ILocationService, LessonService: ng.resource.IResourceClass<ILesson>) {        
            this.location = $location;
            this.lesson = LessonService.get({ lessonId: "lesson" + this.location.search().id });
            this.typedText = '';
        }

        keyPressHandler($event) {
            console.log($event);
            var tempTyped = this.typedText + $event.key;
            console.log(tempTyped);
            if (tempTyped != this.lesson.text.substr(0, tempTyped.length)) {
                $event.preventDefault();
                //this.lesson.getStatistic().increasNofMistakes();
            }
            else {
                //this.lesson.getStatistic().increaseNofCorrectKeyPresses();
                if (tempTyped == this.lesson.text[0]) { //at the first character the timer starts
                    //this.scope.$broadcast('timer-start');
                }
                if (tempTyped == this.lesson.text) { //at the last character the timer stops and the textarea sets to disabled
                    this.typedText = tempTyped;
                    //this.isDisabled = true;
                   // this.scope.$broadcast('timer-stop');
                }
            }
        }

        
    }
}
