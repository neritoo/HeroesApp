import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe:any = {};
  marvel:boolean = false;
  dc:boolean = false;

  constructor( private router:Router, private activatedRoute:ActivatedRoute, private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
  });
   }

   volver(){
     this.router.navigate(['/heroes'])
   }

}
