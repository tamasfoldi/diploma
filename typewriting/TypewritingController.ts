/// <reference path="../references.ts" />

module app {

    import Lesson = Model.Lesson;
    import LessonService = app.LessonService;


    export class TypewritingCtrl {
        
        private location: ng.ILocationService;
        private lessonService: LessonService;
        private lessonId: number;
        private lesson: Lesson;
        private typedText: string;
        private scope: ng.IScope;
        private isDisabled: boolean;

        constructor(lessonService: LessonService, $location: ng.ILocationService, $scope: ng.IScope) {
            this.location = $location;
            this.lessonService = lessonService;
            this.lessonId = this.location.search()["id"];
            this.lesson = lessonService.getLesson(this.lessonId);
            this.typedText = "";
        }

        typing($event) {
            if (this.typedText != this.lesson.getText().text.substr(0, this.typedText.length))
                this.typedText = this.typedText.substr(0, this.typedText.length - 1);
            if (this.typedText == this.lesson.getText().text)
                this.isDisabled = true;
        }

        getIsDisabled(): boolean {
            return this.isDisabled;
        }

        draw() {
            //var modalInstance = this.modalService.open({
            //    templateUrl: 'typewriting/templates/newLesson.html',
            //    size: 'lg',
            //    resolve: {
            //        //items: function () {
            //        //    return $scope.items;
            //        //}
            //    }
            //});
        }
    }
}