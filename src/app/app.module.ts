import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ 
	BrowserModule 
	],
  declarations: [ 
			AppComponent, 
			HeroDetailComponent	
		],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
