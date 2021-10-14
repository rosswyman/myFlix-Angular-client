import { Component, OnInit } from '@angular/core';

import { FetchDataApiService } from '../fetch-api-data.service'
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';
import { MatDialog } from '@angular/material/dialog';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { SynopsisViewComponent } from '../synopsis-view/synopsis-view.component';

@Component({
  selector: 'app-user-favorites',
  templateUrl: './user-favorites.component.html',
  styleUrls: ['./user-favorites.component.scss']
})

export class UserFavoritesComponent implements OnInit {
  favoriteMovies: any[] = [];
  constructor(
    public fetchApiData: FetchDataApiService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getUserFavorites();
  }

  getUserFavorites(): void {
    this.fetchApiData.getFavorites().subscribe((resp: any) => {
        this.favoriteMovies = resp;
        console.log(this.favoriteMovies);
        return this.favoriteMovies;
      });
    }

}
