import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { EntitiesComponent } from './components/entities/entities.component';
const routes: Routes = 
[
  {
    path : "aircrafts", component : AircraftsComponent
  },
  {
    path : "entities", component : EntitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
