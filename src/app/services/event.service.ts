import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent } from '../actions/aircraft-action';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  eventSubject : Subject<ActionEvent> = new Subject<ActionEvent>()
  eventSubjectObservable = this.eventSubject.asObservable()

  publishEvent(event : ActionEvent)
  {
    this.eventSubject.next(event)
  }
}
