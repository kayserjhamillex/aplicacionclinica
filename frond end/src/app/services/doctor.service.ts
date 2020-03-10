import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  // apiUrl='https://sleepy-cove-35277.herokuapp.com/doctor';
  apiUrl = 'https://quiet-journey-49563.herokuapp.com/doctor';
  constructor(private http: HttpClient) { }
  getDoctors() {
    return this.http.get(`${this.apiUrl}`);
  }

  getDoctor(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
