import { user } from 'src/app/core/entity';
import * as AuthActions from '../store/auth.action';

export interface UserState {
   user:user;
  }
  
  const initialState:any = {
   user:{}
  };

  export function authReducer(
    state = initialState,
    action: AuthActions.AuthActions
  ) {
    switch(action.type){
      case AuthActions.ADD_USER:
        return{
          ...state
        };
        case AuthActions.USER_LOGIN:
        return{
          ...state
        };
        case AuthActions.USER_LOGIN_SUCCESS:
          const user=action.payload.userCredentials;
        return{
          ...state,
          user:{...user}
        };
        default:
      return state;
  }
    }
    