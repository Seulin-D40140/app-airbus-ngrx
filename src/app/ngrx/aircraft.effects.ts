import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Action } from "@ngrx/store";
import { AircraftActionTypes, GetAllAircraftsError, GetAllAircraftsSuccess } from "./aircraft-action";

@Injectable ()

export class aircraftsEffects
{
    constructor( private aircraftService : AircraftService , private effectActions : Actions) { }

    getAllAircraftsEffects : Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionTypes.GET_ALL_AIRCRAFT),
            mergeMap((action) => 
            {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsSuccess(aircrafts)),
                    catchError (( err) => of(new GetAllAircraftsError(err.message)))
                )
            })
        )
    )
}