import { Action } from "@ngrx/store";
import { AircraftStateEnum, AircraftsState, initState } from "./aircraft.state";
import { AircraftActionTypes, AircraftActions } from "./aircraft-action";

export function AircraftsReducer(state : AircraftsState = initState , action : Action)
{
    switch(action.type)
    {
        case AircraftActionTypes.GET_ALL_AIRCRAFT :
            console.log("loading")
            return { ...state , dataState : AircraftStateEnum.LOADING}

        case AircraftActionTypes.GET_ALL_AIRCRAFT_SUCCESS : 
            return { ...state , dataState : AircraftStateEnum.LOADED, aircrafts : (<AircraftActions> action).payload}

        case AircraftActionTypes.GET_ALL_AIRCRAFT_ERROR :
            return { ...state , dataState : AircraftStateEnum.ERROR , errorMessage : (<AircraftActions> action).payload}

        default :
            return { ...state }
    }

}