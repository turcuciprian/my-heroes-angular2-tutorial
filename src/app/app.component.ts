import { Component } from '@angular/core';

export class Hero{
	id: number;
	name: string;
}
const HEROES: Hero[] = [
	{id: 1, name: 'test name'},
	{id: 2, name: 'another test name'},
	{id: 3, name: 'yet another test name'},
	{id: 4, name: 'the test name'},
	{id: 5, name: 'test name one'},
	{id: 6, name: 'test name 123'},
	{id: 7, name: 'test name another!'},
	{id: 8, name: 'test name yes!'},
];

@Component({
  selector: 'my-app',
  template: `
	<h1>My name is: {{hero.name}}</h1>
	<h2>{{hero.name}}'s ID is: {{hero.id}}</h2>
	<ul>
		<li (click)="clickEvent(hero)" *ngFor="let hero of heroes" [class.selected] = "hero === selectedHero">{{hero.name}}</li>
	</ul>    
`,
})
export class AppComponent{
	hero: Hero = {
		id: 1,
		name: 'Cip' 
	};
	selectedHero: Hero;
	clickEvent(hero){
		this.selectedHero = hero;
	}
	heroes = HEROES;
}
