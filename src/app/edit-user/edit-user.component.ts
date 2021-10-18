import { Component, OnInit, Input } from '@angular/core';

import { FetchDataApiService } from '../fetch-api-data.service';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @Input() userData = { 
    Username: '', 
    Password: '', 
    Email: '', 
    Birthday: '',
  };

  constructor(
    public fetchApiData: FetchDataApiService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  editUser(): void {
    console.log('editUser in edit-user component called');
    console.log(this.userData);

    this.fetchApiData.editUser(this.userData).subscribe((resp) => {
      
      console.log(resp)
      localStorage.setItem('username', resp.Username)    
    
    this.snackBar.open(this.userData.Username, 'Your profile has been updated.', {
      duration: 3000
    });
  }, (resp) => {
    this.snackBar.open(resp, 'OK', {
      duration: 3000
    });
    setTimeout(function () {
      window.location.reload();
     }, 3500);
    })}

    }
  

