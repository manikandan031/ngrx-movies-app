import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AppState} from '../../store/state/app.state';
import {Store} from '@ngrx/store';
import {addMovie} from '../../store/actions/movies.actions';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  movieForm: FormGroup;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.movieForm = new FormGroup(
      {
        id: new FormControl(''),
        name: new FormControl('')
      }
    );
  }

  addMovie() {
    this.store.dispatch(
      addMovie({ payload: this.movieForm.getRawValue() })
    );
  }
}
