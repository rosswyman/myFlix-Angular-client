import { Component, Inject, Input, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-view',
  templateUrl: './director-view.component.html',
  styleUrls: ['./director-view.component.scss']
})
export class DirectorViewComponent implements OnInit {

  constructor(

    
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
