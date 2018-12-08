import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './messages/message.component';
import { AuthGuard } from './services/auth-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent, canActivate: [ AuthGuard] },
  { path: 'employees', component: EmployeeListComponent, canActivate: [ AuthGuard]},
  { path: 'addemployee', component: AddEmployeeComponent, canActivate: [ AuthGuard]},
  { path: 'editemployee/:id', component: EditEmployeeComponent, canActivate: [ AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'messages', component: MessageComponent, outlet: 'popup' },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
