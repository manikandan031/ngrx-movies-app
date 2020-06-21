import { Injectable } from '@angular/core';
import {MovieModel} from '../models/movie.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  public getMovies(): Observable<MovieModel[]> {
    return of(
      [
        {
          id: 1,
          name: 'Spider Man'
        },
        {
          id: 2,
          name: 'Captain America'
        }
      ]
    );
  }
}
