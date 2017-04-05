import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './Components/app.component/app.component';
import { UserDetails }  from './Components/user-detail.component/user-detail.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, UserDetails ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }