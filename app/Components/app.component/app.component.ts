import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: 'app.component.html'
	// directive: [ UserDetails ]
})

export class AppComponent {
	hero: Hero = {
		name: "test",
		id: 1
	}
}