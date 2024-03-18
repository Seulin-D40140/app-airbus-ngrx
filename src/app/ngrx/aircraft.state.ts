import { EntityAdapter, EntityState } from "@ngrx/entity"
import { Aircraft } from "src/models/aircraft.model"
import { Operation } from "src/models/operation.model"

export enum AircraftStateEnum 
{
    LOADING = "loading",
    LOADED = "loaded",
    ERROR = "error",
    INITIAL = "initial"
}



export interface AircraftsState extends EntityState<Operation>
{
    aircrafts : Aircraft[],
    errorMessage : string,
    dataState : AircraftStateEnum
}

export const initState : AircraftsState = 
{
    aircrafts : [],
    errorMessage : "",
    dataState : AircraftStateEnum.INITIAL,
    ids : [],
    entities: {}
}

