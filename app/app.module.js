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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
// import { AUTH_PROVIDERS } from 'angular2-jwt';
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./Components/app.component/app.component');
var user_task_component_1 = require('./Components/user-task.component/user-task.component');
var all_tasks_component_1 = require('./Components/all-tasks.component/all-tasks.component');
var create_task_component_1 = require('./Components/create-task.component/create-task.component');
var task_service_1 = require('./Service/task.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule,
                router_1.RouterModule.forRoot(app_routes_1.routes, {
                    useHash: true
                })],
            declarations: [app_component_1.AppComponent, all_tasks_component_1.allTasks, user_task_component_1.UserTask, create_task_component_1.createTask],
            providers: [task_service_1.tasksService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map