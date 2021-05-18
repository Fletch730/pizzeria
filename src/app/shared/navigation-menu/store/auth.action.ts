import { Action } from '@ngrx/store';
import {  user } from 'src/app/core/entity';

export const ADD_USER='[USER] Add User';
export const USER_LOGIN='[USER] User Login';
export const USER_LOGIN_SUCCESS='[USER] User Login Success'

export class addUsers implements Action{
    readonly type=ADD_USER;
    constructor(public payload:{
        name:string,
        email:string,
        phone:string,
        password:string,
        city:string,
        pincode:number,
        landmark:string,
        houseNo:string
        
    }){}
}

export class userLogin implements Action{
    readonly type=USER_LOGIN;
    constructor(public payload:{
        email:string,
        password:string,
    }){}
}

export class userLoginSuccess implements Action{
    readonly type=USER_LOGIN_SUCCESS
    constructor(public payload:{userCredentials:{}}){}
}

export type AuthActions=
    | addUsers
    | userLogin
    | userLoginSuccess
    
