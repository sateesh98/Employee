import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
import { IEmployee } from '../model/employee';

describe('EmployeeService', () => {    
  let service: EmployeeService;
  let employeeDummy: IEmployee;

    beforeEach(() => {    
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [EmployeeService]
        });

        service = TestBed.get(EmployeeService);
    });  
    
    // Test case for Get ALL Employees.
    it('should retrive employees from the API via GET', () => {
           service.getEmployees().subscribe(employees => {
              expect(employees.length).toBeGreaterThanOrEqual(1);
           });
    });

    // Test case for Get employee by ID.
    it('should retrive employee via ID from the API via GET', () => {
          service.getEmployeeByID(1).subscribe(emp => {
             expect(emp).toBeDefined();
          });
    });
  
      // Test case for POST employee.
      it('should Save employee from the API via POST', () => {
        employeeDummy = {
          id: undefined,
          firstName: 'kumar',
          lastName: 'raja',
          email: 'kumar.raj@gmail.com',
          password: 'Pwd9806543',
          created: new Date(Date.now()),
          updated: new Date(Date.now())          
        };

        service.saveEmployee(employeeDummy).subscribe( res => {
          expect(res).toBeDefined();
        });          
      });
      
       // Test case for PUT employee.
       it('should Update employee from the API via PUT', () => {
        employeeDummy = {
          id: 3,
          firstName: 'kumar',
          lastName: 'raja',
          email: 'kumar.raj@gmail.com',
          password: 'Pwd9806543',
          created: new Date(Date.now()),
          updated: new Date(Date.now())          
        };
        service.updateEmployee(employeeDummy).subscribe( res => {
          expect(res).toBeDefined();
        });          
      });

         // Test case for Delete employee by ID.
      it('should retrive employee via ID from the API via DELETE', () => {        
          service.deleteEmployee(1).subscribe(emp => {
            expect(emp).toBeGreaterThanOrEqual(1);
          });        
      });



  });

