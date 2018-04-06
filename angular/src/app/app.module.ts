import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AgmCoreModule} from '@agm/core';
import { resaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';

@NgModule({
  declarations: [
    AppComponent,
    resaltarDirective,
    ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyAeFn3NeVMtxDxh0Gl_tv8pbVbl17OHXNs"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
