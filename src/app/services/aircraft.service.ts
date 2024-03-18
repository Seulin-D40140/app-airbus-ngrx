import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from 'src/models/aircraft.model';

@Injectable({
	providedIn: 'root'
})

export class AircraftService {

	entities =
		[
			{
				"id": 1,
				"name": "compas",
				"categorie": "navigation",
				"price": 5000
			},
			{
				"id": 2,
				"name": "gps",
				"categorie": "navigation",
				"price": 10000
			},
			{
				"id": 3,
				"name": "indic vitess",
				"categorie": "pilotage",
				"price": 7500
			},
			{
				"id": 4,
				"name": "indic altitude",
				"categorie": "pilotage",
				"price": 3500
			},
			{
				"id": 5,
				"name": "altimetre",
				"categorie": "pilotage",
				"price": 3500
			},
			{
				"id": 6,
				"name": "radar meteo",
				"categorie": "enviroment de vol",
				"price": 15000
			},
			{
				"id": 7,
				"name": "syst anti collision",
				"categorie": "environement de vol",
				"price": 50000
			}
		]

	constructor( private http : HttpClient) { }

	public getAircrafts():Observable<Aircraft[]>
	{
		return this.http.get<Aircraft[]>(environment.host+"/aircrafts");
	}

	public getDesignAircrafts() : Observable<Aircraft[]>
	{
		return this.http.get<Aircraft[]>(environment.host+"/aircrafts?design=true");
	}

	public getDevelopementAircraft() : Observable<Aircraft[]>
	{
		return this.http.get<Aircraft[]>(environment.host+"/aircrafts?developement=true");
	}

	public getAircraftByMsn(id:number) : Observable<Aircraft>
	{
		return this.http.get<Aircraft>(environment.host + "/aircrafts/"+ id);
	}

	public getByKeyWord(payload : any)
	{
		return this.http.get<Aircraft[]>(environment.host + "/aircrafts?prog_like=" + payload) 
	}
}
