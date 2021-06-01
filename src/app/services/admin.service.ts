import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = environment.url;
  UsersSubject = new Subject();
  UsersSubjectEvent = this.UsersSubject.asObservable();

  constructor(private http: HttpClient) { }

  getAdmin(id){
    return this.http.get(`${this.url}/api/Auth/user/${id}`)
  }

  getAllUsers(){
    return this.http.get<any>(`${this.url}/api/Auth/users`)
  }

  deleteUserById(id){
    this.UsersSubject.next(true)
    return this.http.delete(`${this.url}/api/Auth/users/${id}`)
  }
}
