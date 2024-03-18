
import { Action } from "@ngrx/store";

export enum OperationActionTypes 
{
    ADDONE = "[Operation] Add One",
    REMOVEONE = "[Operation] Remove One",
    REMOVEALL = "[Operation] Remove All"

}

export class addOneEntity implements Action
{
    type : OperationActionTypes = OperationActionTypes.ADDONE;
    constructor(public payload :any) { }
}

export class removeOneEntity implements Action
{
    type : OperationActionTypes = OperationActionTypes.REMOVEONE;
    constructor(public payload :any) { }
}

export class removeAll implements Action
{
    type : OperationActionTypes = OperationActionTypes.REMOVEALL;
    constructor(public payload :any) { }
}

export type OperationActions =   addOneEntity | removeOneEntity | removeAll