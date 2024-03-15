import { Action } from "@ngrx/store";
import { Aircraft } from "src/models/aircraft.model";

export enum AircraftActionTypes 
{
    GET_ALL_AIRCRAFT = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFT_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFT_ERROR = "[Aircrafts] Get All Aircrafts Error",

    GET_ALL_DESIGN_AIRCRAFT = "[Aircrafts] Get All Aircrafts Design",

    GET_ALL_DEVS_AIRCRAFT = "[Aircrafts] Get All Aircrafts Devs",


}

export class GetAllAircraftsAction implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFT;
    constructor(public payload :any) { }
}

export class GetAllDesignAircraftAction implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_DESIGN_AIRCRAFT
    constructor(public payload : any) { }
}

export class GetAllDevsAircraftAction implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_DEVS_AIRCRAFT
    constructor(public payload : any) { }
}

export class GetAllAircraftsSuccess implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFT_SUCCESS;
    constructor(public payload :Aircraft[]) { }
}

export class GetAllAircraftsError implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFT_ERROR;
    constructor(public payload :string) { }
}

export type AircraftActions = GetAllAircraftsAction | GetAllAircraftsSuccess  | GetAllAircraftsError |
                                GetAllDesignAircraftAction | GetAllDevsAircraftAction

