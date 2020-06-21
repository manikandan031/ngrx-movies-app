import {createAction, props} from '@ngrx/store';
import {MovieModel} from '../../models/movie.model';

export enum MoviesActionsEnum {
  AddMovie = '[Movie] Add Movie',
  DeleteMovie = '[Movie] Delete Movie'
}

export const addMovie = createAction(MoviesActionsEnum.AddMovie, props<{ payload: MovieModel }>());

export const deleteMovie = createAction(MoviesActionsEnum.DeleteMovie, props<{payload: number}>());
