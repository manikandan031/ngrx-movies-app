import {initialMoviesState, MoviesState} from './movies.state';

export interface AppState {
  moviesState: MoviesState;
}

export const initialAppState = {
  moviesState: initialMoviesState
};

export function getInitialState(): AppState {
  return initialAppState;
}
