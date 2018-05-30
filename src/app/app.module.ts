import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserInfoComponent } from './home-page/user-info/user-info.component';
import { UserEditComponent } from './home-page/user-edit/user-edit.component';

import {AuthService} from './services/auth.service'
import {AuthenticationGuard} from './guards/AuthenticationGuard'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    HomePageComponent,
    UserInfoComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
