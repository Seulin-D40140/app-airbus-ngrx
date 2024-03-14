import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AircraftsComponent } from './components/aircrafts/aircrafts.component';
import { AircraftNavbarComponent } from './components/aircrafts/aircraft-navbar/aircraft-navbar.component';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AircraftsReducer } from "./ngrx/aircraft.reducer";
import { aircraftsEffects } from "./ngrx/aircraft.effects";

@NgModule({
  declarations: 
  [
    AppComponent,
    AircraftsComponent,
    AircraftNavbarComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({airbusState : AircraftsReducer}),
    EffectsModule.forRoot([aircraftsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})

export class AppModule { }
