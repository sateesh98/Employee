import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { IEmployee } from '../model/employee';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    
  errorMessage: string;
  pageTitle = 'Log In';
  employees: IEmployee[];  
  constructor(private authService: AuthService,
              private router: Router, private employeeService: EmployeeService) { }
    
    ngOnInit() {

        this.employeeService.getEmployees()
        .subscribe( (data) => {            
            this.employees = data;
        });
        
    }
  login(loginForm: NgForm) {
      
        if (loginForm && loginForm.valid) {
              const userName = loginForm.form.value.userName;
              const password = loginForm.form.value.password;
              
              if (userName === 'admin') {
                    this.authService.login(userName, password);
                    this.router.navigate(['/employees']);
              } else {                        
                        const status = this.employees.filter((val) => val.email === userName);                                            
                                     
                        if (status.length > 0) {
              
                              if (status[0].email === userName && status[0].password === password) {
                                  this.authService.login(userName, password);
                                  this.router.navigate(['/employees']);
                              } else {
                                  this.router.navigate(['/login']);
                                  this.errorMessage = 'Please enter a valid user name and password.';
                              }
              
                        } else {
                            this.errorMessage = 'Please enter a valid user name and password.';
                        }
              }            
          }
    }

}
