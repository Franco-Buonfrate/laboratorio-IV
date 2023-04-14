import { Component } from '@angular/core';

@Component({
  selector: 'app-nombres',
  templateUrl: './nombres.component.html',
  styleUrls: ['./nombres.component.css']
})
export class NombresComponent {
  constructor()
  {
    this.nombre="";
    this.apellido="";
    this.resultado="";
  }
  
  nombre: string;
  apellido :string;
  resultado :string;

  concatenar()
  {
    this.resultado = this.nombre + " " + this.apellido;
  }
}
