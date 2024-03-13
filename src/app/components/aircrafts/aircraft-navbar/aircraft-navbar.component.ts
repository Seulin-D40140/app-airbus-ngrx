import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AircraftActionTypes } from 'src/app/actions/aircraft-action';

@Component(
	{
		selector: 'app-aircraft-navbar',
		templateUrl: './aircraft-navbar.component.html',
		styleUrls: ['./aircraft-navbar.component.css']
	})

export class AircraftNavbarComponent implements OnInit {

	value : string = ""

	@Output() eventEmitter : EventEmitter<any> = new EventEmitter()

	constructor() { }

	ngOnInit(): void {
	}

	getAllAircrafts()
	{
		this.eventEmitter.emit({type : AircraftActionTypes.GET_ALL_AIRCRAFT , payload : null});
	}

	getDesignedAircrafts()
	{
		this.eventEmitter.emit({type : AircraftActionTypes.GET_DESIGNED_AIRCRAFT , payload : null})
	}

	getDevelopementAircrafts()
	{
		this.eventEmitter.emit({type : AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFT , payload : null})
	}
	
	onSearch(value : any)
	{
		this.eventEmitter.emit({type : AircraftActionTypes.GET_SEARCH_AIRCRAFTS , payload : value})
	}
}
