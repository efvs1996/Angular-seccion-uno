import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
                <div>
                    <h1> {{title}} </h1>
                    <button (click)="acumular(base)" > +1 </button>
                    <span>{{numero}}</span>
                    <button (click)="acumular(-base)"> -1 </button>
                </div>
                `
})
    
export class ContadorComponent{

    title : string = 'Contador App';
    numero: number = 1;
    base  : number= 5;
    
    acumular(valor: number){
        this.numero += valor
    }
}
