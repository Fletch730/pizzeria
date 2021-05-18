import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../shared/navigation-menu/store/auth.reducer';
import * as fromMenu from '../menu/menu/store/menu.reducer';

export interface AppState {
    auth:fromAuth.UserState;
    menu:fromMenu.MenuState
}

export const appReducer: ActionReducerMap<AppState,any> = {
    auth:fromAuth.authReducer,
    menu:fromMenu.menuReducer
}