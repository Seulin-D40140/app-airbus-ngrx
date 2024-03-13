import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/models/aircraft.model';
import { AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';

@Component({
	selector: 'app-aircrafts',
	templateUrl: './aircrafts.component.html',
	styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

	readonly dataStateEnum = DataStateEnum;

	aircrafts$ : Observable <AppDataState<Aircraft[]>> | null = null
	error = null

	constructor( private aircraftService : AircraftService) { }

	ngOnInit(): void {
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
	onActionEvent($event : any)
	{
		if($event == "ALL_AIRCRAFT")
		{
			this.getAllAircrafts()
		}
		else if($event == "DESIGN_AIRCRAFT")
		{
			this.getDesignedAircrafts()
		}
		else if($event == "DEVS_AIRCRAFT")
		{
			this.getDevelopementAircrafts()
		}
	}
}
