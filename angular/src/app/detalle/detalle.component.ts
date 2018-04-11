import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  lugares:any = [
    {id: 1,plan :"pagado",cercania: 1, distancia:10, active: true,nombre: "floreria", dercripcion:" Descripcion generica blab bakdkebcebcecnbebcie"},
    {id: 2,plan :"gratuito",cercania: 2, distancia:100,active: false,nombre: "guarderia", dercripcion:" Descripcion generica blab bakdkebcebcecnbebcie"},
    {id: 3,plan :"gratuito",cercania: 3, distancia:1000,active: true,nombre: "lol", dercripcion:" Descripcion generica blab bakdkebcebcecnbebcie"}
  ];
  id=null;
  lugar:any = {};
  constructor(private route: ActivatedRoute ) {
    console.log(this.route.snapshot.params["id"]);
    console.log(this.route.snapshot.queryParams["action"]);
    this.id=this.route.snapshot.params["id"];
    this.lugar=this.buscarLugar();
   }

  buscarLugar(){
    return this.lugares.filter((lugar)=> { return lugar.id == this.id})[0] || null;
    
  }

  ngOnInit() {
  }

}
