import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDefaultMapComponent } from './create-default-map/create-default-map.component';
import { CustomLayerMapComponent } from './custom-layer-map/custom-layer-map.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDefaultMapComponent,
    CustomLayerMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
