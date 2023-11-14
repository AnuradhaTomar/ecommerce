import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { BASE_URL } from './config/config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  }
  
  signIn(credentials: any): Observable<any> {
    return this.http.post(`${BASE_URL}/auth/signin`, credentials).pipe(
      map((response: any) => {
        console.log("response",response)
        if (response && response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['/dashboard']);
        }
        return response;
      })
    );
  }

  signUp(userData: any): Observable<any> {
    return this.http.post(`${BASE_URL}/auth/signup`, userData).pipe(
      map((response: any) => {
        if (response && response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['/dashboard']);
        }
        return response;
      })
    );
  }
}
