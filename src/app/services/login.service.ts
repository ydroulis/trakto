import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthResponse } from '../interfaces/authResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})



export class LoginService {
  private apiUrl = 'https://api.trakto.io';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { };

  signin(email: string, password: string) {
    return this.http.post(this.apiUrl + '/auth/signin', { email, password }, { observe: 'response' })
      .pipe(tap((res: HttpResponse<Partial<AuthResponse>>) => {
        const authToken = res.body?.access_token;
        const imageProfile = res.body?.avatar?.url;

        authToken && window.localStorage.setItem('authToken', authToken)
        imageProfile && window.localStorage.setItem('imageProfile', imageProfile);
      }));
  }

  logOut() {
    window.localStorage.removeItem('authToken');
    window.localStorage.removeItem('imageProfile');
    this.router.navigate(['/']);
  }

  isLogged() {
    return !!window.localStorage.getItem('authToken')
  }
}
