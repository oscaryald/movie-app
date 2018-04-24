import { Component, OnInit } from '@angular/core';
import {Movie} from '../shared/movie';
import {data} from '../shared/mock-data';
import {MovieService} from '../shared/movie.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResults: Movie[] = [];

  search$: Subject<string> = new Subject<string>();
  fetching: boolean = false;
  search: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.search$
        .debounceTime(500)
        .map(query => {
            this.fetching = true
            return query;
         }).subscribe( (query) => {
            this.searchQuery(query)
         });
  }

  searchQuery(query: string){
    if(query.length > 0){
        this.movieService.searhMovie(query)
            .subscribe((results) => {
              this.fetching = false;
              this.searchResults = results;
            })
    }else{
      this.fetching = false;
      this.searchResults = [];
    }

  }

  setCurrentMovie(movie: Movie){
    this.movieService.changeSelectedMovie(movie);
  }

}
