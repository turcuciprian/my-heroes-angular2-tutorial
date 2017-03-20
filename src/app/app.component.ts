import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero}}</h2>
  `,
})
export class AppComponent  {
  title = 'Ciprian turcu\'s angular tutorial';
  hero = 'I\'m the hero here!';
  name = 'Angular';
}
