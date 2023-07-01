import { createAction } from '@ngrx/store';

export const login = createAction('[Login Component] login');
export const loginSuccess = createAction('[Login Component] login success');
export const loginFailure = createAction('[Login Component] login failure');
