import {Component, OnInit} from '@angular/core';
import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {MovieModel} from '../../models/movie.model';
import {selectMovies} from '../../store/selectors/movies.selector';
import {deleteMovie} from '../../store/actions/movies.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: MovieModel[];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select(selectMovies).subscribe(
      (movies) => this.movies = movies
    );
  }

  deleteMovie(movie: MovieModel) {
    this.store.dispatch(deleteMovie({payload: movie.id}));
  }
}
