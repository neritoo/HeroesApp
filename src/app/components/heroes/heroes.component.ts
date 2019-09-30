import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:Heroe[] = [];

  constructor( _heroesServicio: HeroesService ) { 
    this.heroes = _heroesServicio.getHeroes();
  }


}
