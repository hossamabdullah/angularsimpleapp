import { Component, OnInit, ViewChild } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {User} from '../types/user.model'

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  @ViewChild('registerationForm') form;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    var username = this.form.form.controls.username.value
    var email = this.form.form.controls.email.value
    var password = this.form.form.controls.password.value
    var user = new User(username, password, email)
    this.authService.register(user)
  }

}
