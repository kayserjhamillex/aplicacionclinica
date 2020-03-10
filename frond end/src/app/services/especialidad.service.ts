import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidad } from '../models/Especialidad';
@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
  // apiUrl='https://sleepy-cove-35277.herokuapp.com/especialidad';
  apiUrl='https://quiet-journey-49563.herokuapp.com/especialidad';
  constructor(private http: HttpClient) { }
  getEspecialidads() {
    return this.http.get(`${this.apiUrl}`);
  }

  getEspecialidad(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
