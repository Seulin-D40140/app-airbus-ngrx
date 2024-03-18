import { Component, OnInit } from '@angular/core';
import { AircraftService } from 'src/app/services/aircraft.service';
import { Store } from '@ngrx/store';
import { Operation } from 'src/models/operation.model';
import { addOneEntity, removeOneEntity } from 'src/app/ngrx/option.action';

@Component({
	selector: 'app-entities',
	templateUrl: './entities.component.html',
	styleUrls: ['./entities.component.css']
	})

	export class EntitiesComponent implements OnInit {

	constructor(private aircraftService : AircraftService , private store : Store) { }

	ngOnInit(): void {  }

	getEtities()
	{
		return this.aircraftService.entities	
	}

	addEntity(entity : Operation)
	{
		console.log(entity)
		this.store.dispatch(new addOneEntity(entity))
	}

	removeEntity(id : number)
	{
		console.log(id)
		this.store.dispatch(new removeOneEntity(id))
	}
}
