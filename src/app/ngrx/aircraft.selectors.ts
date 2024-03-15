import { createSelector , createFeatureSelector } from "@ngrx/store";
import { AircraftsState } from "./aircraft.state";

export const selectCountAlertAircraft = createSelector (
    createFeatureSelector('airbusState'),
    (state : AircraftsState) => {
        let total : number = 0
        state.aircrafts.forEach(a => {
            if( a.developement == true && a.design == true)
            {
                total++
            }
        })
        return total;
    }
)