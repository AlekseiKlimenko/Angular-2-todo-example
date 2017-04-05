import { Component, Input } from '@angular/core';
import { Hero } from '../../Models/user';

@Component({
    selector: 'user-details',
    templateUrl: './app/Components/user-detail.component/user-detail.component.html'
})

export class UserDetails {
    @Input() hero : Hero;
    @Input() testStr : string;
}