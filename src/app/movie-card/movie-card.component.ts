import { Component, OnInit } from '@angular/core';

import { FetchDataApiService } from '../fetch-api-data.service'
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';
import { MatDialog } from '@angular/material/dialog';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { SynopsisViewComponent } from '../synopsis-view/synopsis-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  user: any = {};
  constructor(
    public fetchApiData: FetchDataApiService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.movies = resp;
        console.log(this.movies);
        return this.movies;
      });
    }

  getGenre(name:string, description:string): void {
    this.dialog.open(GenreViewComponent, {
      data: {name, description},
      width: '500px'
    });
  }

  getDirector(name:string, birth:string, death:string, bio:string): void {
    this.dialog.open(DirectorViewComponent, {
      data: {name, birth, death, bio},
      width: '500px'
    });
  }

  getSynopsis(title:string,description:string,imagePath:string): void {
    this.dialog.open(SynopsisViewComponent, {
      data: {title, description, imagePath},
      width: '500px'
    });
  }

  toggleFavorite(movieID:string,title:string): void {
    console.log('toggled favorite');
    console.log(movieID);
        this.fetchApiData.addToFavorites(movieID).subscribe((resp: any) => {     
          this.snackBar.open(`${title} has been added to your favorites.`, 'OK', {
            duration: 3000,
          })
          setTimeout(function() {
            window.location.reload()}, 3000);
        });

    
  }
    

  
}