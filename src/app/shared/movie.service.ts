import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Movie} from './movie';

@Injectable()
export class MovieService {

  private selectedMovie$: Subject<Movie> = new Subject<Movie>();

  constructor() { }

  get currentMovie(){
    return this.selectedMovie$;
  }

  changeSelectedMovie(movie: Movie){
    this.selectedMovie$.next(movie)
  }

}
