import { createReducer, on, Action } from '@ngrx/store';
import { login } from './login.actions';
import { Users } from '../loginDummyData';
import { ROLES } from '../roles';

export const loginReducerFeatureKey = 'loginReducerFeatureKey';

export const initialState: Users = {
  name: '',
  password: '',
  role: ROLES.PATIENT,
  userName: '',
};

const _loginReducer = createReducer(
  initialState,
  on(login, (state) => {
    console.log('reducer works');

    return state;
  })
);

export function loginReducer(state: Users, action: Action) {
  return _loginReducer(state, action);
}
