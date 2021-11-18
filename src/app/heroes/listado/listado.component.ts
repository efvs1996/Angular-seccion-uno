import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes      : string[] = ['Spiderman', 'Hulk', 'Thor', 'Wolverine', 'Superman', 'Meteor', 'Captain America']
  heroeBorrado: string = '';
  borr        : string[] = []


  borrarHeroe(i:number):void{
    console.log('Borrando...')
    this.borr = (this.heroes.splice(i,1))
    this.heroeBorrado = this.borr.toString();
  }
}
