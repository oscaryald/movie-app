import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';

import {Movie} from './movie';

@Injectable()
export class MovieService {

  private selectedMovie$: Subject<Movie> = new Subject<Movie>();
  private apiKey: string = '7a32ac875761977d8d633af152507598';
  private baseApiUrl: string = 'https://api.themoviedb.org/3/search/movie';
  private baseConfigurationUrl: string = 'https://api.themoviedb.org/3/configuration';
  private imageBaseUrl: string = '';
  private imageSize = {}

  constructor(private http: HttpClient) {
    this.setImgConfiguration()
  }

  get currentMovie(){
    return this.selectedMovie$;
  }

  searhMovie(query: string){
    const params = new HttpParams().set('api_key', this.apiKey).set('query', query)
      return this.http.get<any>(this.baseApiUrl, {params})
          .map(res => {
              return res.results.map ((result: Movie) => {
                console.log(result)
                return {
                    ...result,
                    backdropUrl: this.createPhotoUrl(result.backdrop_path),
                    posterUrl: this.createPhotoUrl(result.backdrop_path)
                }

          })

      });
  }

  changeSelectedMovie(movie: Movie){
    this.selectedMovie$.next(movie)
  }

  setImgConfiguration(){
    const params = new HttpParams().set('api_key', this.apiKey)
      this.http.get<any>(this.baseConfigurationUrl, {params})
          .map(res => res)
          .subscribe((config) => {
            this.imageBaseUrl = config.images.base_url

              console.log(config.images)
          })
  }

  createPhotoUrl(path: string){
    if(!path){
      return '';
    }
    return `${this.imageBaseUrl}${path}`;
  }

}
