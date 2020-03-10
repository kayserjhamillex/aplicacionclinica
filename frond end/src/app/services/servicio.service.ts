import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Servicio } from '../models/Servicio';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  // apiUrl='https://sleepy-cove-35277.herokuapp.com/servicio';
  apiUrl='https://quiet-journey-49563.herokuapp.com/servicio';
  constructor(private http: HttpClient) { }
  getServicios() {
    return this.http.get(`${this.apiUrl}`);
  }

  getServicio(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
