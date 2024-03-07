import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDefaultMapComponent } from './create-default-map/create-default-map.component';
import { CustomLayerMapComponent } from './custom-layer-map/custom-layer-map.component';

const routes: Routes = [
  {path: 'create-default', component: CreateDefaultMapComponent},
  {path: 'custom-layer', component: CustomLayerMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
