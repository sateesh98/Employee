import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxPasswordToggleModule } from 'ngx-password-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './messages/message.component';
import { EmployeeService } from './services/employee.service';
import { MessageService } from './services/message.service';
import { WelcomeComponent } from './welcome/welcome.component';

import { PasswordStrengthValidator } from './shared/password-validator.directive';
import { AgGridModule } from 'ag-grid-angular/main';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';  


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    LoginComponent,
    MessageComponent,
    PasswordStrengthValidator,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPasswordToggleModule,
    AgGridModule.withComponents([])
  ],
  providers: [ MessageService, EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
