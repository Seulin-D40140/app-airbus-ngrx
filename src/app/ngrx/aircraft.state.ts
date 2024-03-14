import { Aircraft } from "src/models/aircraft.model"

export enum AircraftStateEnum 
{
    LOADING = "loading",
    LOADED = "loaded",
    ERROR = "error",
    INITIAL = "initial"
}

export interface AircraftsState
{
    aircrafts : Aircraft[],
    errorMessage : "",
    dataState : AircraftStateEnum
}

export const initState : AircraftsState = 
{
    aircrafts : [],
    errorMessage : "",
    dataState : AircraftStateEnum.INITIAL
}