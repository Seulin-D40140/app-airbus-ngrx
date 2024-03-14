import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AircraftActionTypes, GetAllAircraftsAction } from 'src/app/ngrx/aircraft-action';
import { EventService } from 'src/app/services/event.service';

@Component(
	{
		selector: 'app-aircraft-navbar',
		templateUrl: './aircraft-navbar.component.html',
		styleUrls: ['./aircraft-navbar.component.css']
	})

export class AircraftNavbarComponent implements OnInit {

	value : string = ""

	@Output() eventEmitter : EventEmitter<any> = new EventEmitter()

	constructor( private store : Store<any>) { }

	ngOnInit(): void {
	}

	getAllAircrafts()
	{
		this.store.dispatch(new GetAllAircraftsAction({}))
		//this.eventService.publishEvent({ type : AircraftActionTypes.GET_ALL_AIRCRAFT , payload : null})
		//this.eventEmitter.emit({type : AircraftActionTypes.GET_ALL_AIRCRAFT , payload : null});
	}

	getDesignedAircrafts()
	{
		//this.eventService.publishEvent({type : AircraftActionTypes.GET_DESIGNED_AIRCRAFT , payload : null})
	}

	getDevelopementAircrafts()
	{
		//this.eventService.publishEvent({type : AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFT , payload : null})
	}
	
	onSearch(value : any)
	{
		//this.eventService.publishEvent({type : AircraftActionTypes.GET_SEARCH_AIRCRAFTS , payload : value})
	}
}
