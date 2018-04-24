import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../shared/movie';

@Component({
  selector: 'app-display-movie',
  templateUrl: './display-movie.component.html',
  styleUrls: ['./display-movie.component.css']
})
export class DisplayMovieComponent implements OnInit {

  @Input() movie: Movie

  constructor() { }


  ngOnInit() {
  }

    getPosterUrl(path:string){
        return 'test-img.jpg'
    }

}
