import { AppStateType } from './redux-store';

export const getAuthUserId = (state: AppStateType) => {
  return state.auth.userId
}