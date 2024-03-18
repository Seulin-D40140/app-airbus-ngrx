import { Action } from "@ngrx/store";
import { AircraftStateEnum, AircraftsState, initState } from "./aircraft.state";
import { AircraftActionTypes, AircraftActions } from "./aircraft-action";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Operation } from "src/models/operation.model";
import { OperationActionTypes, OperationActions } from "./option.action";

export const adapter : EntityAdapter<Operation> = createEntityAdapter<Operation>({     })

export const initialState : AircraftsState = adapter.getInitialState({  
    aircrafts : [],
    errorMessage : "",
    dataState : AircraftStateEnum.INITIAL,
    ids : [],
    entities: {}
    })

export function AircraftsReducer(state : AircraftsState = initialState , action : Action)
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
//......................................................................................................................

        case AircraftActionTypes.GET_ALL_DESIGN_AIRCRAFT :
            console.log("loading design")
            return { ...state , dataState : AircraftStateEnum.LOADING}
        
        case AircraftActionTypes.GET_ALL_DESIGN_AIRCRAFT_SUCCESS : 
            return { ...state , dataState : AircraftStateEnum.LOADED, aircrafts : (<AircraftActions> action).payload}

        case AircraftActionTypes.GET_ALL_DESIGN_AIRCRAFT_ERROR :
            return { ...state , dataState : AircraftStateEnum.ERROR , errorMessage : (<AircraftActions> action).payload}
//......................................................................................................................

        case AircraftActionTypes.GET_ALL_DEVS_AIRCRAFT :
            console.log("loading devs")
            return { ...state , dataState : AircraftStateEnum.LOADING}

        case AircraftActionTypes.GET_ALL_DEVS_AIRCRAFT_SUCCESS : 
            return { ...state , dataState : AircraftStateEnum.LOADED, aircrafts : (<AircraftActions> action).payload}

        case AircraftActionTypes.GET_ALL_DEVS_AIRCRAFT_ERROR :
            return { ...state , dataState : AircraftStateEnum.ERROR , errorMessage : (<AircraftActions> action).payload}
//......................................................................................................................

        case AircraftActionTypes.GET_ALL_SEARCH_AIRCRAFT :
            console.log("loading devs")
            return { ...state , dataState : AircraftStateEnum.LOADING}

        case AircraftActionTypes.GET_ALL_SEARCH_AIRCRAFT_SUCCESS : 
            return { ...state , dataState : AircraftStateEnum.LOADED, aircrafts : (<AircraftActions> action).payload}

        case AircraftActionTypes.GET_ALL_SEARCH_AIRCRAFT_ERROR :
            return { ...state , dataState : AircraftStateEnum.ERROR , errorMessage : (<AircraftActions> action).payload}
//......................................................................................................................

        case OperationActionTypes.ADDONE :
            return adapter.addOne((<OperationActions> action).payload , state)

        case OperationActionTypes.REMOVEONE :
            return adapter.removeOne((<OperationActions> action).payload , state)

        default :
        return { ...state}
    }

}