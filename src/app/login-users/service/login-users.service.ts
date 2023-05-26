import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LoginUsers} from "../model/login-users";
import {Roles} from "../model/roles";

@Injectable({
  providedIn: 'root'
})
export class LoginUsersService {

  constructor(private httpClient: HttpClient) {
  }

  getUser(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/get-user');
  }

  addNewUser(user:any): Observable<LoginUsers> {
    return this.httpClient.post<LoginUsers>('http://localhost:8080/add-user', user);
  }

  deleteUser(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.delete<any>('http://localhost:8080/delete-user/' + id, id);
  }

  saveRoles(role:any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/add-role', role);
  }


  getRoles(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/get-roles');
  }
}
