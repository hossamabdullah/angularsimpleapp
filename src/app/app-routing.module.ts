import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {RegisterationComponent} from './registeration/registeration.component'
import {HomePageComponent} from './home-page/home-page.component'
import {UserInfoComponent} from './home-page/user-info/user-info.component'
import {UserEditComponent} from './home-page/user-edit/user-edit.component'

import {AuthenticationGuard} from './guards/AuthenticationGuard'

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterationComponent},
    {path: 'home', component: HomePageComponent, canActivate: [AuthenticationGuard], children:[
        {path: '', component: UserInfoComponent},
        {path: 'edit', component: UserEditComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}