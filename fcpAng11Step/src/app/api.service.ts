import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public get() {
    return this.http.get(`${this.SERVER_URL}/products`);
  }
}
