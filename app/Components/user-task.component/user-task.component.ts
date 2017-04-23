import {Component, Input, Output, EventEmitter} from "@angular/core";
import { Task } from "../../shared/task";

@Component({
    moduleId: module.id,
    selector: 'user-task',
    templateUrl: 'user-task.component.html'
})

export class UserTask {
    @Input() task : Task;
    @Output() delete = new EventEmitter();

    deleteTask (event, taskId) {
        event.preventDefault();
        this.delete.emit(taskId);
    };
}