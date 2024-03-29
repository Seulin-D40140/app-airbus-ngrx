import { Action } from "@ngrx/store";
import { Aircraft } from "src/models/aircraft.model";

export enum AircraftActionTypes 
{
    GET_ALL_AIRCRAFT = "[Aircrafts] Get All Aircrafts",
    GET_ALL_AIRCRAFT_SUCCESS = "[Aircrafts] Get All Aircrafts Success",
    GET_ALL_AIRCRAFT_ERROR = "[Aircrafts] Get All Aircrafts Error",

    GET_ALL_DESIGN_AIRCRAFT = "[Aircrafts] Get All Aircrafts Design",
    GET_ALL_DESIGN_AIRCRAFT_SUCCESS = "[Aircrafts] Get All Aircrafts Design Success",
    GET_ALL_DESIGN_AIRCRAFT_ERROR = "[Aircrafts] Get All Aircrafts Design Error",

    GET_ALL_DEVS_AIRCRAFT = "[Aircrafts] Get All Aircrafts Devs",
    GET_ALL_DEVS_AIRCRAFT_SUCCESS = "[Aircrafts] Get All Aircrafts Devs Success",
    GET_ALL_DEVS_AIRCRAFT_ERROR = "[Aircrafts] Get All Aircrafts Devs Error",

    GET_ALL_SEARCH_AIRCRAFT = "[Aircrafts] Get All Aircrafts Search",
    GET_ALL_SEARCH_AIRCRAFT_SUCCESS = "[Aircrafts] Get All Aircrafts Search Success",
    GET_ALL_SEARCH_AIRCRAFT_ERROR = "[Aircrafts] Get All Aircrafts Search Error",

    ADDONE = "[Operation] Add One",
    REMOVEONE = "[Operation] remove One"
}

export class GetAllAircraftsAction implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_AIRCRAFT;
    constructor(public payload :any) { }
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
//..................................................................................................
export class GetAllDesignAircraftAction implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_DESIGN_AIRCRAFT
    constructor(public payload : any) { }
}

export class GetAllDesinAircraftsSuccess implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_DESIGN_AIRCRAFT_SUCCESS;
    constructor(public payload :Aircraft[]) { }
}

export class GetAllDesignAircraftsError implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_DESIGN_AIRCRAFT_ERROR;
    constructor(public payload :string) { }
}
//...................................................................................................
export class GetAllDevsAircraftAction implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_DEVS_AIRCRAFT
    constructor(public payload : any) { }
}

export class GetAllDevsAircraftsSuccess implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_DEVS_AIRCRAFT_SUCCESS;
    constructor(public payload :Aircraft[]) { }
}

export class GetAllDevsAircraftsError implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_DEVS_AIRCRAFT_ERROR;
    constructor(public payload :string) { }
}
//.....................................................................................................
export class GetAllSearchAircraftAction implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_SEARCH_AIRCRAFT
    constructor(public payload : string) { }
}

export class GetAllSearchAircraftsSuccess implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_SEARCH_AIRCRAFT_SUCCESS;
    constructor(public payload :Aircraft[]) { }
}

export class GetAllSearchAircraftsError implements Action
{
    type : AircraftActionTypes = AircraftActionTypes.GET_ALL_SEARCH_AIRCRAFT_ERROR;
    constructor(public payload :string) { }
}

export type AircraftActions =   GetAllAircraftsAction | GetAllAircraftsSuccess  | GetAllAircraftsError |
                                GetAllDesignAircraftAction | GetAllDesinAircraftsSuccess | GetAllDesignAircraftsError |
                                GetAllDevsAircraftAction | GetAllDevsAircraftsSuccess | GetAllDevsAircraftsError |
                                GetAllSearchAircraftAction | GetAllSearchAircraftsSuccess | GetAllSearchAircraftsError

