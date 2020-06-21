import {createSelector} from '@ngrx/store';
import {AppState} from '../state/app.state';
import {MoviesState} from '../state/movies.state';

export const selectMovies = createSelector(
       (state: AppState) => state.moviesState,
  (movieState: MoviesState) => movieState.movies
);


