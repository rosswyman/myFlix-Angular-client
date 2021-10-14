import { Component, OnInit } from '@angular/core';
import { FetchDataApiService } from '../fetch-api-data.service'

import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent {
  user: any = {};

  constructor(
    public fetchApiData: FetchDataApiService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router,
    ) { }

ngOnInit(): void {
  this.getUser();
}

getUser(): void {
  let user = localStorage.getItem('username');
  this.fetchApiData.getUser(user).subscribe((resp: any) => {     
      this.user = resp;
    });
  }
}