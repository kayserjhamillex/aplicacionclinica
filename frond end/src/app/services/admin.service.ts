import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Admin} from '../models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // apiUrl='https://sleepy-cove-35277.herokuapp.com/admin';
  apiUrl='https://quiet-journey-49563.herokuapp.com/admin';
  constructor(private http: HttpClient) { }
  getAdmins() {
    return this.http.get(`${this.apiUrl}`);
  }
}
