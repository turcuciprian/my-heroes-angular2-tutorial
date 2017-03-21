import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 1, name: 'test name' },
  { id: 2, name: 'another test name' },
  { id: 3, name: 'yet another test name' },
  { id: 4, name: 'the test name' },
  { id: 5, name: 'test name one' },
  { id: 6, name: 'test name 123' },
  { id: 7, name: 'test name another!' },
  { id: 8, name: 'test name yes!' },
];

@Component({
  selector: 'my-app',
  template: `
	<h1>Stuff</h1> <h2>subtitle</h2>
	<ul>
		<li (click)="clickEvent(hero)" 
			*ngFor="let hero of heroes" 
			[class.selected] = "hero === selectedHero">
		{{hero.name}}
		</li>
	</ul>
	<my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`,
	styles: [`
		.selected{
			color:red;
			background:lightblue;
		}
		li{
			padding:10px;
			background:#c3c3c3;
			display:block;
			max-width:300px;
			margin:5px 0;
		}
		li:hover{
			cursor:pointer;
			background:red;
			color:#FFF;
		}
	`]
})
export class AppComponent {
  selectedHero: Hero;
  heroes = HEROES;
  clickEvent(hero: Hero) {
    this.selectedHero = hero;
  };
}
