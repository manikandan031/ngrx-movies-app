import {MovieModel} from '../../models/movie.model';

export interface MoviesState {
  movies: MovieModel[];
}

export const initialMoviesState: MoviesState = {
  movies: [
    {
      id: 1,
      name: 'Spider Man'
    },
    {
      id: 2,
      name: 'Captain America'
    }
  ]
};
