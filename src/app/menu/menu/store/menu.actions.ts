import { Action } from '@ngrx/store';
import { menu } from 'src/app/core/entity';


export const FETCH_PIZZA_MENU='[MENU]Fetch Pizza Menu';
export const FETCH_PASTA_MENU='[MENU]Fetch Pasta Menu';
export const FETCH_DRINK_MENU='[MENU]Fetch Drink Menu';
export const FETCH_SALAD_MENU='[MENU]Fetch Salad Menu';
export const FETCH_DESSERT_MENU='[MENU]Fetch Desert Menu';
export const FETCH_MENU_SUCCESS='[MENU]Fetch Menu Success';


export class fetchPizzaList implements Action{
    readonly type=FETCH_PIZZA_MENU
}

export class fetchPastaList implements Action{
    readonly type=FETCH_PASTA_MENU
}
export class fetchDrinkList implements Action{
    readonly type=FETCH_DRINK_MENU
}
export class fetchSaladList implements Action{
    readonly type=FETCH_SALAD_MENU
}
export class fetchDessertList implements Action{
    readonly type=FETCH_DESSERT_MENU
}

export class fetchMenuSuccess implements Action{
    readonly type=FETCH_MENU_SUCCESS;
    constructor(public payload: { menuList: menu[] }) {}
}

export type MenuActions=
| fetchPizzaList
| fetchMenuSuccess
| fetchPastaList
| fetchDrinkList
| fetchSaladList
| fetchDessertList
