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
var core_1 = require('@angular/core');
var HEROES = [
    { id: 1, name: 'test name' },
    { id: 2, name: 'another test name' },
    { id: 3, name: 'yet another test name' },
    { id: 4, name: 'the test name' },
    { id: 5, name: 'test name one' },
    { id: 6, name: 'test name 123' },
    { id: 7, name: 'test name another!' },
    { id: 8, name: 'test name yes!' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.hero = {
            id: 1,
            name: 'Cip'
        };
        this.heroes = HEROES;
    }
    AppComponent.prototype.clickEvent = function (hero) {
        this.selectedHero = hero;
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t<h1>My name is: {{hero.name}}</h1> <h2>{{hero.name}}'s ID is: {{hero.id}}</h2>\n\t<ul>\n\t\t<li (click)=\"clickEvent(hero)\" *ngFor=\"let hero of heroes\" [class.selected] = \"hero === selectedHero\">{{hero.name}}</li>\n\t</ul>\n",
            styles: ["\n\t.selected{\n\t\tcolor:red;\n\t\tbackground:lightblue;\n\t}\n\tli{\n\t\tpadding:10px;\n\t\tbackground:#c3c3c3;\n\t\tdisplay:block;\n\t\tmax-width:300px;\n\t\tmargin:5px 0;\n\t}\n\tli:hover{\n\t\tcursor:pointer;\n\t\tbackground:red;\n\t\tcolor:#FFF;\n\t}\n"]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map