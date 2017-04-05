import { Component } from '@angular/core';
import { UserDetails } from '../user-detail.component/user-detail.component'
import { Hero } from '../../Models/user';

@Component({
	selector: 'app',
	templateUrl: './app/Components/app.component/app.component.html',
	directive: [ UserDetails ]
})

export class AppComponent {
	public heroes = HEROES;
	selectedHero: Hero;
	testString = 'test';
	onSelectedHero(hero: Hero){
		console.log('HERO',hero);
		this.selectedHero = hero;
	}
}

var HEROES: Hero[] = [
	{ "id": 11, "name": "Mr. Nice" },
	{ "id": 12, "name": "Narco" },
	{ "id": 13, "name": "Bombasto" },
	{ "id": 14, "name": "Celeritas" },
	{ "id": 15, "name": "Magneta" },
	{ "id": 16, "name": "RubberMan" },
	{ "id": 17, "name": "Dynama" },
	{ "id": 18, "name": "Dr IQ" },
	{ "id": 19, "name": "Magma" },
	{ "id": 20, "name": "Tornado" }
];