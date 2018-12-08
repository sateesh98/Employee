import { Injectable } from '@angular/core';
import { IEmployee, IUser } from '../model/employee';
import { MessageService } from './message.service';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'api/employee-data';
  currentUser: IUser;
  employees: IEmployee[];
  redirectUrl: string;
 
  constructor( private messageService: MessageService, private employeeService: EmployeeService) { }
 
  isLoggedIn(): boolean {
      return !!this.currentUser;
  }

login(userName: string, password: string): void {
  
  if (!userName || !password) {
    this.messageService.addMessage('Please enter your userName and password');
    return;
  }
  if (userName === 'admin') {
    this.currentUser = {
        userName: userName,
        password: password,
        isAdmin: true
    };
    this.messageService.addMessage('Admin login');
    return;
  }
  this.currentUser = {
    userName: userName,
    password: password,
    isAdmin: false
  };
  this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
}

logout(): void {
    this.currentUser = null;
}
}
