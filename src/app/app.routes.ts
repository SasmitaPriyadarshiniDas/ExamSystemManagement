import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
        
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'edit',
        component: EditComponent 

    },
    {
        path: 'view',
        component: ViewComponent 
    
    },
    
    {
        path: '', redirectTo: '/home', 
        pathMatch: 'full'
    }
   
];
