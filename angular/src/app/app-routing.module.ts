import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
const appRoutes : Routes = [
    {path:'detalle', component:DetalleComponent },
    {path:'lugares', component:LugaresComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
// Documentacion: https://angular.io/tutorial/toh-pt5
