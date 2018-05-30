import { Component, OnInit } from '@angular/core';
import {User} from '../../types/user.model';
import {AuthService} from '../../services/auth.service';
import {FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User;
  editInfoForm;

  ngOnInit(){
    this.editInfoForm = new FormGroup({
        'username' : new FormControl(this.user.username),
        'email' : new FormControl(this.user.email),
        'password' : new FormControl(this.user.password),
    });
  }

  constructor(private authService: AuthService, private router: Router) { 
    this.user = this.authService.getUser();
  }

  save(){
    this.user.username = this.editInfoForm.controls.username.value
    this.user.email = this.editInfoForm.controls.email.value
    this.user.password = this.editInfoForm.controls.password.value
    this.authService.setUser(this.user)
    this.router.navigate(['/home']);
  }

}
