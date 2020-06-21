import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '../state/app.state';
import * as fromMovies from './movies.reducer';

export const reducers: ActionReducerMap<AppState, any> = {
  moviesState: fromMovies.reducer,
};
