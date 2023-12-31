import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },{
    path:'messages',component:MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
