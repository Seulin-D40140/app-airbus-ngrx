export enum AircraftActionTypes 
{
    GET_ALL_AIRCRAFT = "[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFT = "[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFT = "[Aircrafts] Get Developed Aircrafts",
    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts"
}

export interface ActionEvent
{
    type : AircraftActionTypes,
    payload : any
}