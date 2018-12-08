import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { IEmployee } from '../model/employee';
import { EmployeeService } from '../services/employee.service';


@Component({  
  templateUrl: './edit-employee.component.html',  
})
export class EditEmployeeComponent implements OnInit, OnDestroy {
  employee: IEmployee;
  id: number;
  sub: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.getEmployee(this.id);
    });
  }

  getEmployee(id: number): void {    
    this.employeeService.getEmployeeByID(id).subscribe((data) => {
          this.employee = data;
          console.log(this.employee);        
    });

  }

  updateEmployee(emp: NgForm): void {
    if (this.employee) {      
      this.employee.updated = new Date(Date.now());
      this.employeeService.updateEmployee(this.employee)
      .subscribe( (res) => {
         console.log(res);
         this.router.navigate(['/employees']);
      });
   }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();    
  }

  

}
