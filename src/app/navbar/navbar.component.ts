import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserProfileComponent } from '../user-profile/user-profile.component'

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar, 
    public dialog: MatDialog,
    public router: Router,
    ) { }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action);
    }

  ngOnInit(): void {
  }

  openUserProfile(): void {
    this.dialog.open(UserProfileComponent, {
      width: '500px'
    } );
  }

  openAllMovies(): void {
    this.router.navigate(['movies']);
  }

  openFavorites(): void {
    // this.router.navigate(['favorites'])
    this.openSnackBar('This is a snackbar','Ok')
  }

   logOut(): void {
    this.router.navigate(['welcome']);
   
  }

}