import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../shared/movie';

@Component({
  selector: 'app-movie-preview',
  templateUrl: './movie-preview.component.html',
  styleUrls: ['./movie-preview.component.css']
})
export class MoviePreviewComponent implements OnInit {

  @Input() movie: Movie = {}
  @Input() index: number: 1;

  constructor() { }

  ngOnInit() {
  }

  backdropStyle = () => {
    console.log(this.movie.backdropUrl)
    return {
          'transition':'all .3s',
          'background':`url(${this.movie.backdropUrl}`,
          'background-size': 'cover'
          }
  }

  animationDelay = () => ({
    'animation-delay':`${this.index*.3}s`
  })



}
