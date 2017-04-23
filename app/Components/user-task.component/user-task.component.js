"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var task_1 = require("../../shared/task");
var UserTask = (function () {
    function UserTask() {
        this.delete = new core_1.EventEmitter();
    }
    UserTask.prototype.deleteTask = function (event, taskId) {
        event.preventDefault();
        this.delete.emit(taskId);
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', task_1.Task)
    ], UserTask.prototype, "task", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UserTask.prototype, "delete", void 0);
    UserTask = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-task',
            templateUrl: 'user-task.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], UserTask);
    return UserTask;
}());
exports.UserTask = UserTask;
//# sourceMappingURL=user-task.component.js.map