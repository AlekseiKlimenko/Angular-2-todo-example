import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


// import { AUTH_PROVIDERS } from 'angular2-jwt';
import { routes } from './app.routes';
import { AppComponent }   from './Components/app.component/app.component';
import { UserTask }  from './Components/user-task.component/user-task.component';
import { allTasks }  from './Components/all-tasks.component/all-tasks.component';
import { createTask }  from './Components/create-task.component/create-task.component';
import { tasksService }  from './Service/task.service';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })],
    declarations: [ AppComponent, allTasks, UserTask, createTask ],
    providers: [ tasksService ],
    bootstrap: [ AppComponent ]
})


export class AppModule { }