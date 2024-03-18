import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Operation } from 'src/models/operation.model';

@Injectable({
	providedIn: 'root'
})
export class OperationService {

	constructor(private http : HttpClient) { }

	addOneOperation()
	{
		return this.http.get<Operation[]>(environment.host+"/entities");
	}

	removeOneOperation()
	{
		
	}
}

