// core modules
import { Component, Inject, Input, OnInit } from '@angular/core';

// custom components

// material modules
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrls: ['./genre-view.component.scss']
})
export class GenreViewComponent implements OnInit {

  constructor(

    /**
     * uses Inject to get movie details from the movie object
     */
    @Inject(MAT_DIALOG_DATA)
    public data: {
        name: string;
        description: string;
    }
  ) { }

  ngOnInit(): void {
  }

}