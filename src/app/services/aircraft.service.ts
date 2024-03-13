import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aircraft } from 'src/models/aircraft.model';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

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
    return this.http.get<Aircraft>(environment.host + "/aicrafts/"+ id);
  }
}
