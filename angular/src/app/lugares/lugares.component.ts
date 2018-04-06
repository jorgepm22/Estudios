import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  title = 'platzi';
  property= true;
  nombre:string = ""
  lugares:any = [
    {plan :"pagado",cercania: 1, distancia:10, active: true,nombre: "floreria"},
    {plan :"gratuito",cercania: 2, distancia:100,active: false,nombre: "guarderia"},
    {plan :"gratuito",cercania: 3, distancia:1000,active: true,nombre: "lol"}
  ]
  lat :number = 0
  lng : number = 0

  constructor(){
    setTimeout( () => this.property = false, 3000)//property binding
  }

  hacerAlgo() {
    alert("haciendo algo")  
  }
  ngOnInit() {
  }

}
