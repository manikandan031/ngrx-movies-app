import {Action, createReducer, on} from '@ngrx/store';
import {initialMoviesState, MoviesState} from '../state/movies.state';
import {addMovie, deleteMovie} from '../actions/movies.actions';

const moviesReducer = createReducer(initialMoviesState,
  on(addMovie, (movieState, {payload}) => ( { movies: [...movieState.movies, payload]} )),
  on(deleteMovie, (movieState, {payload}) => ({
    movies: movieState.movies.filter(m => m.id !== payload)
  }))
  );

export function reducer(state: MoviesState | undefined, action: Action) {
  return moviesReducer(state, action);
}
