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
  favoriteMovies: any[] = [];
  user: any = {};
  constructor(
    public fetchApiData: FetchDataApiService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    ) { }

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }

  ngOnInit(): void {
    this.getMovies();
    this.getFavorites();
    
    
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.movies = resp;
        
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

  getFavorites(): void{
    const username = localStorage.getItem('username');
   
    this.fetchApiData.getUser(username).subscribe((resp: any) => {
      
      this.favoriteMovies=resp.FavoriteMovies;
      
    })
  }

  isFavorite(movieID: string): any{
    if (this.favoriteMovies.includes(movieID)){
      return true;
    } else {
      return false;
    }
  }

  getSynopsis(title:string,description:string,imagePath:string): void {
    this.dialog.open(SynopsisViewComponent, {
      data: {title, description, imagePath},
      width: '500px'
    });
  }
  

  addToFavorites(movieID:string,title:string): void {
    console.log('addToFavorites called');
    console.log(movieID);
    this.openSnackBar(`"${title}" has been added to your favorites.`, 'OK')
        this.fetchApiData.addToFavorites(movieID).subscribe((resp: any) => {     
          console.log(resp);
          setTimeout(function() {
            window.location.reload()}, 3000);
        });
        return this.getFavorites();    
  }

  deleteFromFavorites(movieID:string,title:string): void {
    console.log('deleteFromFavorites called');
    
    this.openSnackBar(`"${title}" has been removed from your favorites.`, 'OK')
        this.fetchApiData.deleteFromFavorites(movieID).subscribe((resp: any) => {     
          console.log(resp);
          setTimeout(function() {
            window.location.reload()}, 3000);
        });
        return this.getFavorites();      
  }
    

  
}