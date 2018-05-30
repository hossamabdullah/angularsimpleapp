import {User} from '../types/user.model'
import { Injectable } from '@angular/core';
import{Router} from '@angular/router';

@Injectable()
export class AuthService{
    loggedIn = false;
    registeredUser: User;

    constructor(private router: Router){}

    isAuthenticated(){
      const promise = new Promise(
        (resolve, reject) => {
          resolve(this.loggedIn)
        }
      )
      return promise
    }
   
    login(user: User){
      if(typeof this.registeredUser === 'undefined'){
        this.router.navigate(['/register'])
      }
      if(user.username == this.registeredUser.username && user.password == this.registeredUser.password){
        this.loggedIn = true
        this.router.navigate(['/home'])
      }
    }
   
    logout(user: User){
      this.loggedIn = false;
    }

    register(user: User){
      if(typeof user === 'undefined')
        return
      
      this.registeredUser = user
      this.router.navigate(['/login'])
    }

    getUser(){
      return this.registeredUser;
    }

    setUser(user: User){
      if(typeof user === 'undefined')
      return
    
      this.registeredUser = user
    }
}