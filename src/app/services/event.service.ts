import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AircraftActions } from '../ngrx/aircraft-action';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  eventSubject : Subject<AircraftActions> = new Subject<AircraftActions>()
  eventSubjectObservable = this.eventSubject.asObservable()

  publishEvent(event : AircraftActions)
  {
    this.eventSubject.next(event)
  }
}
