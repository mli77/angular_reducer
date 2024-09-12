import { Action, createAction, createReducer, on, props } from '@ngrx/store';

export interface User {
  firstName: string,
  lastName: string
}

export const change = createAction(
  '[Name] Change',
  props<{ user: User }>()
);

const initialState: User = {
  firstName: 'Manjula',
  lastName: 'Jayawardana'
};

const _userReducer = createReducer(
  initialState,
  on(change, (state, action) => ({
    firstName: action.user.firstName,
    lastName: action.user.lastName 
  }))
);

export function userReducer(state: User = initialState, action: Action) {
  return _userReducer(state, action);
}
