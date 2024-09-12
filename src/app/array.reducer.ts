import { Action, createAction, createReducer, on, props } from '@ngrx/store';

export interface HttpStatus {
  code: number
}

export const addStatus = createAction(
  '[Http Status] Add',
  props<{ httpStatus: HttpStatus }>()
);

export const remvoeStatus = createAction(
  '[Http Status] Remove',
  props<{ httpStatus: HttpStatus }>()
);

const initialState: HttpStatus[] = [
  { code: 200 },
  { code: 404 }
];

const _httpStatusReducer = createReducer(
  initialState,
  on(addStatus, (state, action) => ([
    ...state,
    action.httpStatus
  ])),
  on(remvoeStatus, (state, action) => state.filter(httpStatus => httpStatus.code !== action.httpStatus.code))
);

export function httpStatusReducer(state: HttpStatus[] = initialState, action: Action) {
  return _httpStatusReducer(state, action);
}
