import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, catchError, map, tap, exhaustMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import * as AuthActions from '../store/auth.action';

@Injectable()
export class AuthEffects {
    constructor(private http: HttpClient, private actions$: Actions) { }

    @Effect()
    addUser=this.actions$.pipe(
        ofType(AuthActions.ADD_USER),
        switchMap((userData:AuthActions.addUsers)=>{
            console.log(userData.payload)
            const data={
                ...userData.payload
            }
            return this.http
            .post(
                environment.baseUrl+"user/signUp",{data}
            )
            .pipe(
                map((resData:any)=>{
                   
                    }),
                catchError((errorRes) => {
                    console.log(errorRes)
                    throw new Error(errorRes);
                  })
            )
        })
    );

    @Effect()
   userLogin=this.actions$.pipe(
        ofType(AuthActions.USER_LOGIN),
        switchMap((userLoginData:AuthActions.userLogin)=>{
            console.log(userLoginData.payload)
            const data={
                ...userLoginData.payload
            }
            return this.http
            .post(
                environment.baseUrl+"user/login",{...userLoginData.payload}
            )
            .pipe(
                map((resData:any)=>{
                   //console.log(resData);
                   return new AuthActions.userLoginSuccess({
                       userCredentials:resData
                   })
                   
                    }),
                catchError((errorRes) => {
                    console.log(errorRes)
                    throw new Error(errorRes);
                  })
            )
        })
    );
}