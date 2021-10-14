// core modules
import { Component, Inject, Input, OnInit } from '@angular/core';

// custom components

// material modules
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-view',
  templateUrl: './director-view.component.html',
  styleUrls: ['./director-view.component.scss']
})
export class DirectorViewComponent implements OnInit {

  constructor(

    /**
     * uses Inject to get movie details from the movie object
     */
    @Inject(MAT_DIALOG_DATA)
    public data: {
        name: string;
        birth: string;
        death: string;
        bio: string;
    }
  ) { }

  ngOnInit(): void {
  }

}
