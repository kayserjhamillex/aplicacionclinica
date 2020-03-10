import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/Paciente';
@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  // apiUrl='https://sleepy-cove-35277.herokuapp.com/paciente';
  apiUrl='https://quiet-journey-49563.herokuapp.com/paciente';
  constructor(private http: HttpClient) { }
  getPacientes() {
    return this.http.get(`${this.apiUrl}`);
  }

  getPaciente(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
