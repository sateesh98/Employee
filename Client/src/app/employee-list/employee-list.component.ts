import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../services/employee.service';

import { IEmployee } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {
  
  employees: IEmployee[];

  private gridApi;
  private gridColumnApi;
  private columnDefs;
  private sortingOrder;

  constructor(private employeeService: EmployeeService, private router: Router) { 
    this.columnDefs = [
        {
          headerName: 'First Name',
          field: 'firstName',
          width: 150,
          sortingOrder: ['asc', 'desc', null]
        },
        {
          headerName: 'Last Name',
          field: 'lastName',
          width: 150,
          sortingOrder: ['asc', 'desc', null]
        },
        {
          headerName: 'Email',
          suppressMenu: true,
          field: 'email',
          width: 150,
          sortingOrder: [false]          
        }, 
        {
          headerName: 'Created Date',
          field: 'created',
          width: 150,
          sortingOrder: ['asc', 'desc', null]         
        }, 
        {
          headerName: 'Updated Date',
          field: 'updated',
          width: 150,
          sortingOrder: ['asc', 'desc', null]        
        },
        {
          headerName: 'Edit/Remove',
          width: 170,
          suppressMenu: true,
          suppressSorting: true,
          template:
          `<button type="button" data-action-type="edit" class="btn btn-primary">
             Edit
           </button>

          <button type="button" data-action-type="remove" class="btn btn-primary">
             Remove
          </button>`
        }      
    ];
  }

  ngOnInit() {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
     
    this.employeeService.getEmployees()
    .subscribe( (data) => {
      params.api.setRowData(data);
    });
  }

  onRowClicked(e) {
    if (e.event.target !== undefined) {
      const data = e.data;
      const actionType = e.event.target.getAttribute('data-action-type');

      switch (actionType) {
          case 'edit':
              return this.onActionEditClick(data);
          case 'remove':
              return this.onActionRemoveClick(data);
      }
    }

  }

  onActionEditClick(data: any): void {
    // console.log('View action clicked', data);
    // let id = data.id;
     this.router.navigate(['/editemployee', data.id]);
  }

  onActionRemoveClick(data: any): void {
    // console.log('Remove action clicked', data);
    this.employeeService.deleteEmployee(data.id)
    .subscribe((res) => {
      console.log('records deleted successfully');
      this.router.navigate(['/welcome']);
    });    
  }

}
