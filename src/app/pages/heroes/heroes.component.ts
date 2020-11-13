import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


heroes: HeroeModel[] = [];

  constructor(private hereosService: HeroesService) { }

  ngOnInit(): void {

  this.hereosService.getHeroes().subscribe(resp =>{
    console.log(resp);
    this.heroes = resp;
  });

  }

  borrarHeroe( hereo: HeroeModel, i: number){

Swal.fire({
  title: '¿Está seguro?',
  text: `Está seguro que desea eliminar a ${hereo.nombre}`,
  icon: 'question',
  showConfirmButton: true,
  showCancelButton: true
}).then(resp =>{
  if(resp.value){
    this,this.heroes.splice(i, 1);
    this.hereosService.borrarHeroe( hereo.id). subscribe(); 
     
  }
});

  }

}
