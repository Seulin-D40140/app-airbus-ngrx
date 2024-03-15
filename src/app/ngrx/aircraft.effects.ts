import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Action } from "@ngrx/store";
import { AircraftActionTypes, GetAllAircraftsError, GetAllAircraftsSuccess, GetAllDesignAircraftsError, GetAllDesinAircraftsSuccess, GetAllDevsAircraftsError, GetAllDevsAircraftsSuccess, GetAllSearchAircraftAction, GetAllSearchAircraftsError, GetAllSearchAircraftsSuccess } from "./aircraft-action";

@Injectable ()

export class aircraftsEffects
{
    constructor( private aircraftService : AircraftService , private effectActions : Actions) { }

    getAllDesignAircraftsEffects : Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionTypes.GET_ALL_DESIGN_AIRCRAFT),
            mergeMap((action) => 
            {
                return this.aircraftService.getDesignAircrafts().pipe(
                    map((aircrafts) => new GetAllDesinAircraftsSuccess(aircrafts)),
                    catchError ((err) => of(new GetAllDesignAircraftsError(err.message)))
                )
            })
        )
    )

    getAllAircraftsEffects : Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionTypes.GET_ALL_AIRCRAFT),
            mergeMap((action) => 
            {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsSuccess(aircrafts)),
                    catchError ((err) => of(new GetAllAircraftsError(err.message)))
                )
            })
        )
    )

    getAllDevsAircraftsEffects2 : Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionTypes.GET_ALL_DEVS_AIRCRAFT),
            mergeMap((action) => 
            {
                return this.aircraftService.getDevelopementAircraft().pipe(
                    map((aircrafts) => new GetAllDevsAircraftsSuccess(aircrafts)),
                    catchError ((err) => of(new GetAllDevsAircraftsError(err.message)))
                )
            })
        )
    )

    getAllSearchAircraftsEffects2 : Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AircraftActionTypes.GET_ALL_SEARCH_AIRCRAFT),
            mergeMap((action : GetAllSearchAircraftAction) => 
            {
                return this.aircraftService.getByKeyWord(action.payload).pipe(
                    map((aircrafts) => new GetAllSearchAircraftsSuccess(aircrafts)),
                    catchError ((err) => of(new GetAllSearchAircraftsError(err.message)))
                )
            })
        )
    )
}