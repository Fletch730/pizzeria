import { menu } from 'src/app/core/entity';
import * as MenuActions from '../store/menu.actions'


export interface MenuState{
    menuList:menu[];
}

const initialState:MenuState={
    menuList:[]
}

export function menuReducer(
    state=initialState,
    action:MenuActions.MenuActions
):MenuState{
    switch(action.type){
        case MenuActions.FETCH_PIZZA_MENU:
            return{
                ...state
            };
            case MenuActions.FETCH_PASTA_MENU:
                    return{
                        ...state
            };
            case MenuActions.FETCH_DRINK_MENU:
                    return{
                        ...state
            };
            case MenuActions.FETCH_SALAD_MENU:
                    return{
                        ...state
            };
            case MenuActions.FETCH_DESSERT_MENU:
                    return{
                        ...state
            };
            case MenuActions.FETCH_MENU_SUCCESS:
                const menuList=action.payload.menuList
                return{
                    menuList:[...menuList]
                };
                
                default:
      return state;
  
    }

}
