import { Component, OnInit, ViewChild, Injectable } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {User} from '../types/user.model'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    var name = this.loginForm.form.controls.username.value
    var password = this.loginForm.form.controls.password.value
    var user = new User(name, password, null)
    this.authService.login(user)
  }
}
