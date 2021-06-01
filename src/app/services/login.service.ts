import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.url;
  authenticationState = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }


login(crendentials){
  return this.http.post<any>(`${this.url}/api/Auth/login`,crendentials).pipe(
    tap(async res =>{
      //console.log('res',res)
      this.authenticationState.next(true);
    })
  );
}

isAuthenticated(){
  return this.authenticationState.value;
}

register(credentials) {
  return this.http.post<any>(`${this.url}/api/Auth/register`, credentials);
}
}
