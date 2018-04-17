import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule} from '@agm/core';
import { resaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { DetalleComponent } from './detalle/detalle.component'
import { AppRoutingModule } from './app-routing.module';
import { LugaresComponent } from './lugares/lugares.component';
import { Contacto.tsComponent } from './contacto.ts/contacto.ts.component';
import { ContactoComponent } from './contacto/contacto.component';
@NgModule({
  declarations: [
    AppComponent,
    resaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    Contacto.tsComponent,
    ContactoComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAeFn3NeVMtxDxh0Gl_tv8pbVbl17OHXNs"
    })
  ],
  providers: [],
  bootstrap: [AppComponent, DetalleComponent, LugaresComponent]
})
export class AppModule { }
