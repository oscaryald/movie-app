import {Component, OnInit} from '@angular/core';
import {Movie} from './shared/movie';
import {data} from './shared/mock-data';
import {MovieService} from './shared/movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  currentMovie: Movie = null;

  constructor(private movieService: MovieService){
    movieService.currentMovie
        .subscribe((movie) => {
          this.currentMovie = movie;
        })
  }

  ngOnInit(){

  }

    startNewSearch(){
      this.movieService.changeSelectedMovie(null)
    }






}
