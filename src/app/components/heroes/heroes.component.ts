import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes:Heroe[] = [];

  constructor( _heroesServicio: HeroesService, private router:Router ) { 
    this.heroes = _heroesServicio.getHeroes();
  }

  verHeroe( i:number ) {
    this.router.navigate( ['/heroe', i] )
  }
}
