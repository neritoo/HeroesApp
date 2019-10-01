import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  buscarHeroe( busqueda:string ){
    if (busqueda != "") {
      this.router.navigate( ['/buscar', busqueda] );
    } else {
      this.router.navigate( ['/heroes'] );
    }
  }
}
