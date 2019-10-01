import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes:Heroe[] = [];
  busqueda:string;
  encontrado:boolean;

  constructor( private router:Router, private activatedRoute:ActivatedRoute, private _heroesService:HeroesService ) { 
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.busqueda = params[ 'busqueda' ];
      this.heroes = this._heroesService.buscarHeroes( params['busqueda'] );
      if (this.heroes.length == 0) {
        this.encontrado = false;
      }
      else {
        this.encontrado = true;
      }
    })

  }
}
