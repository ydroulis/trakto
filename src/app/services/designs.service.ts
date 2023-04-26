import { DesignList } from './../interfaces/designList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignsService {
  private apiUrl = 'https://api.trakto.io';
  private authToken = window.localStorage.getItem('authToken');
  private headers = new HttpHeaders().set('Authorization', `Bearer ${this.authToken}`);

  constructor(private http: HttpClient,) { }

  getDesigns(): Observable<DesignList> {
    return this.http.get<DesignList>(this.apiUrl + "/document?total_per_page=10&order_orientation=desc",
      { headers: this.headers });
  }
}
