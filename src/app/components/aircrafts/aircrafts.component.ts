import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/models/aircraft.model';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';
import { Laboratory } from 'src/app/laboratory';
import { ActionEvent, AircraftActionTypes } from 'src/app/actions/aircraft-action';

@Component({
	selector: 'app-aircrafts',
	templateUrl: './aircrafts.component.html',
	styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

	labo : Laboratory
	readonly dataStateEnum = DataStateEnum;

	aircrafts$ : Observable <AppDataState<Aircraft[]>> | null = null
	error = null

	constructor( private aircraftService : AircraftService ) { 
		this.labo = new Laboratory()
	}

	ngOnInit(): void 
	{
		this.labo.tests()
	}

	getAllAircrafts()
	{
		this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
			map(data => ({dataState : DataStateEnum.LOADED , data : data})),
			startWith({dataState : DataStateEnum.LOADING}),
			catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
		)
	}

	getDesignedAircrafts()
	{
		this.aircrafts$ = this.aircraftService.getDesignAircrafts().pipe(
			map(data => ({dataState : DataStateEnum.LOADED , data : data})),
			startWith({dataState : DataStateEnum.LOADING}),
			catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
		)
	}

	getDevelopementAircrafts()
	{
		this.aircrafts$ = this.aircraftService.getDevelopementAircraft().pipe(
			map(data => ({dataState : DataStateEnum.LOADED , data : data})),
			startWith({dataState : DataStateEnum.LOADING}),
			catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
		)
	}

	getOnSearch(payload : any)
	{
		this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
			map(data => ({dataState : DataStateEnum.LOADED , data : data.filter( ac => ac.prog.includes(payload))})),
			startWith({dataState : DataStateEnum.LOADING}),
			catchError(err => of({dataState : DataStateEnum.ERROR , errorMessage : err.message}))
		)
	}

	onActionEvent($actionEvent : ActionEvent)
	{
		switch ($actionEvent.type)
		{
			case AircraftActionTypes.GET_ALL_AIRCRAFT :
				this.getAllAircrafts()
				break
			case AircraftActionTypes.GET_DESIGNED_AIRCRAFT :
				this.getDesignedAircrafts()
				break
			case AircraftActionTypes.GET_DEVELOPMENT_AIRCRAFT :
				this.getDevelopementAircrafts()
				break
			case AircraftActionTypes.GET_SEARCH_AIRCRAFTS :
				this.getOnSearch($actionEvent.payload)
				break
		}
	}
}
