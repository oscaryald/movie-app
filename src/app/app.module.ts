import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DisplayMovieComponent} from './display-movie/display-movie.component';
import {SearchComponent} from './search/search.component';
import {MoviePreviewComponent} from './search/movie-preview/movie-preview.component';
import {FooterComponent} from './footer/footer.component';
import {MovieService} from './shared/movie.service';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DisplayMovieComponent,
        SearchComponent,
        MoviePreviewComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [MovieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
