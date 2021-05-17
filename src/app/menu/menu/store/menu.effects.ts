import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as MenuActions from '../store/menu.actions'
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap,map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { menu } from 'src/app/core/entity';
import { DataService } from 'src/app/core/services/data.service';


@Injectable()
export class MenuEffects{
    constructor(private http: HttpClient, private actions$: Actions,private dataService: DataService) { }

    @Effect()
    fetchPizzaList=this.actions$.pipe(
        ofType(MenuActions.FETCH_PIZZA_MENU),
        switchMap(()=>{
            return this.http
            .get(
                environment.baseUrl+"menu/pizzaList"
            )
            .pipe(
                map((resData:any)=>{
                
                    return new MenuActions.fetchMenuSuccess({
                        
                        menuList:resData,
                    });
                }),
                catchError((errorRes) => {
                    console.log(errorRes)
                    throw new Error(errorRes);
                  })
            )
        })
    );

    @Effect()
    fetchPastaList=this.actions$.pipe(
        ofType(MenuActions.FETCH_PASTA_MENU),
        switchMap(()=>{
            return this.http
            .get(
                environment.baseUrl+"menu/pastaList"
                ).pipe(
                    map((resData:any)=>{
                        return new MenuActions.fetchMenuSuccess({
                        
                            menuList:resData,
                        });
                    }),
                    catchError((errorRes) => {
                        console.log(errorRes)
                        throw new Error(errorRes);
                      })
                )
        })
    );

    @Effect()
    fetchdrinkList=this.actions$.pipe(
        ofType(MenuActions.FETCH_DRINK_MENU),
        switchMap(()=>{
            return this.http
            .get(
                environment.baseUrl+"menu/drinkList"
                ).pipe(
                    map((resData:any)=>{
                        return new MenuActions.fetchMenuSuccess({
                        
                            menuList:resData,
                        });
                    }),
                    catchError((errorRes) => {
                        console.log(errorRes)
                        throw new Error(errorRes);
                      })
                )
        })
    );

    @Effect()
    fetchSaladList=this.actions$.pipe(
        ofType(MenuActions.FETCH_SALAD_MENU),
        switchMap(()=>{
            return this.http
            .get(
                environment.baseUrl+"menu/saladList"
                ).pipe(
                    map((resData:any)=>{
                        return new MenuActions.fetchMenuSuccess({
                        
                            menuList:resData,
                        });
                    }),
                    catchError((errorRes) => {
                        console.log(errorRes)
                        throw new Error(errorRes);
                      })
                )
        })
    );

    @Effect()
    fetchDessertList=this.actions$.pipe(
        ofType(MenuActions.FETCH_DESSERT_MENU),
        switchMap(()=>{
            return this.http
            .get(
                environment.baseUrl+"menu/dessertList"
                ).pipe(
                    map((resData:any)=>{
                        return new MenuActions.fetchMenuSuccess({
                        
                            menuList:resData,
                        });
                    }),
                    catchError((errorRes) => {
                        console.log(errorRes)
                        throw new Error(errorRes);
                      })
                )
        })
    );

}