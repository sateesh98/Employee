import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { IEmployee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {
  errorMessage: string;
  employee: IEmployee;
  employees: IEmployee[];
    
  constructor(private employeeService: EmployeeService,  private router: Router) { }

  ngOnInit() {
    this.loadInitialValues();
  }

  loadInitialValues(): void {
    // initializing model here
      this.employee = {
        id: null,
        firstName: null,
        lastName: null,
        email: '',
        password: null,
        created: new Date(Date.now()),
        updated: new Date(Date.now())
      };
  }
  
  saveEmployee(emp: NgForm): void {
    
    if (this.employee) {            
       this.employeeService.getEmployees()
        .subscribe( (data) => {        
          this.employees = data;          
          if (this.employees) {            
             const res = this.employees.filter( (val) => val.email === this.employee.email);             
             if (res.length > 0) {
                    this.errorMessage = 'email already exist in database, it should be unique';
              } else {
                          this.employeeService.saveEmployee(this.employee)
                          .subscribe((result) => {                             
                             this.router.navigate(['/employees']);
                          });
                } 
            }          
      });
    }
    
  }
}
