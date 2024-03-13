import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-aircraft-navbar',
  templateUrl: './aircraft-navbar.component.html',
  styleUrls: ['./aircraft-navbar.component.css']
})
export class AircraftNavbarComponent implements OnInit {

  @Output() eventEmitter : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  getAllAircrafts()
  {
    this.eventEmitter.emit("ALL_AIRCRAFT");
  }

  getDesignedAircrafts()
  {
    this.eventEmitter.emit("DESIGN_AIRCRAFT")
  }

  getDevelopementAircrafts()
  {
    this.eventEmitter.emit("DEVS_AIRCRAFT")
  }

  
}
