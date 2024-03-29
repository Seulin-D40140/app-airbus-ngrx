import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Aircraft } from 'src/models/aircraft.model';
import { AircraftStateEnum, AircraftsState } from 'src/app/ngrx/aircraft.state';
import { AircraftActionTypes } from 'src/app/ngrx/aircraft-action';
import { EventService } from 'src/app/services/event.service';
import { Store } from '@ngrx/store';
import { selectCountAlertAircraft } from 'src/app/ngrx/aircraft.selectors';

@Component({
	selector: 'app-aircrafts',
	templateUrl: './aircrafts.component.html',
	styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

	readonly aircraftsStateEnum = AircraftStateEnum
	aircraftsState$ : Observable <AircraftsState> | null = null

	countAlertAircraft$ : Observable<number> | undefined

	constructor( private store : Store<any>) 
	{
		this.countAlertAircraft$ = store.select(selectCountAlertAircraft)
	}

	ngOnInit(): void 
	{
		this.aircraftsState$ = this.store.pipe( map((state) => state.airbusState))
		//this.eventService.eventSubjectObservable.subscribe((actionEvent : ActionEvent) => {this.onActionEvent(actionEvent)})
	}
}
