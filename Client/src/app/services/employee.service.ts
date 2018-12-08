import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../model/employee';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public baseUrl = 'http://localhost:3005/employees';
  
  constructor(private _httpClient: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this._httpClient.get<IEmployee[]>(this.baseUrl)
    .pipe(
      tap(employees => console.log(employees)),
      catchError(this.handleError('getEmployees'))
        ) as Observable<IEmployee[]>;    
  }

  getEmployeeByID(id: number): Observable<IEmployee> {
    return this._httpClient.get<IEmployee>(this.baseUrl + '/' + id);
  }

  saveEmployee(employee: IEmployee): Observable<IEmployee> {
    employee.id = undefined;
    return this._httpClient.post<IEmployee>(this.baseUrl, employee);  
  }

  updateEmployee(employee: IEmployee): Observable<IEmployee> {
    return this._httpClient.put<IEmployee>(this.baseUrl + '/' + employee.id, employee);
  }

  deleteEmployee(id: number) {
    return this._httpClient.delete<IEmployee>(`${this.baseUrl}/${id}`);
  }

  private handleError<T> (operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      // TODO: better job of transforming error for user consumption
      throw new Error(`${operation} failed: ${message}`);
    };

  }
}
