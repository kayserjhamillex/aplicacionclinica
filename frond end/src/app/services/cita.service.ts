import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Paciente} from '../models/Paciente';
import { Cita } from '../models/Cita';
import { Observable } from 'rxjs';
import {Especialista} from '../models/Especialista';
import {Hora} from '../models/Hora';
import {Horario} from '../models/Horario';

@Injectable({
  providedIn: 'root'
})
export class CitaService {


  // para hacer las pruebas en localhost
  // debemos descomentar lo comentado y comentar los las lineas que llevan
  // https://sleepy-cove-35277.herokuapp.com
  // apiUrlespecialidad='http://localhost:666/especialidad';
  // apiUrldoctor='http://localhost:666/doctor';
  // apiUrlespecialista='http://localhost:666/especialista';
  // apiUrlhora='http://localhost:666/hora';
  // apiUrlhorario='http://localhost:666/horario';
  // apiUrlpaciente='http://localhost:666/paciente';
  // apiUrlcita='http://localhost:666/cita';
  // apiUrlespecialidad='https://sleepy-cove-35277.herokuapp.com/especialidad';
  // apiUrldoctor='https://sleepy-cove-35277.herokuapp.com/doctor';
  // apiUrlespecialista='https://sleepy-cove-35277.herokuapp.com/especialista';
  // apiUrlhora='https://sleepy-cove-35277.herokuapp.com/hora';
  // apiUrlhorario='https://sleepy-cove-35277.herokuapp.com/horario';
  // apiUrlpaciente='https://sleepy-cove-35277.herokuapp.com/paciente';
  // apiUrlcita='https://sleepy-cove-35277.herokuapp.com/cita';
  apiUrlespecialidad = 'https://quiet-journey-49563.herokuapp.com/especialidad';
  apiUrldoctor = 'https://quiet-journey-49563.herokuapp.com/doctor';
  apiUrlespecialista = 'https://quiet-journey-49563.herokuapp.com/especialista';
  apiUrlhora = 'https://quiet-journey-49563.herokuapp.com/hora';
  apiUrlhorario = 'https://quiet-journey-49563.herokuapp.com/horario';
  apiUrlpaciente = 'https://quiet-journey-49563.herokuapp.com/paciente';
  apiUrlcita = 'https://quiet-journey-49563.herokuapp.com/cita';
  apiUrlreserva = 'https://quiet-journey-49563.herokuapp.com/gmailreserva';

  constructor(private http: HttpClient) { }

  getEspecialidads() {
    return this.http.get(`${this.apiUrlespecialidad}`);
  }

  getEspecialidad(id: string) {
    return this.http.get(`${this.apiUrlespecialidad}/${id}`);
  }
  getDoctors() {
    return this.http.get(`${this.apiUrldoctor}`);
  }

  getDoctor(id: string) {
    return this.http.get(`${this.apiUrldoctor}/${id}`);
  }

  getEspecialistas() {
    return this.http.get(`${this.apiUrlespecialista}`);
  }

  getEspecialista(id: string) {
    return this.http.get(`${this.apiUrlespecialista}/${id}`);
  }

  getfilterespecialidad(idespe: string) {
    return this.http.get(`${this.apiUrlespecialista}/filtro1/${idespe}`);
  }

  getfilterobject(doc: string, idespe: string) {
    return this.http.get(`${this.apiUrlespecialista}/filtro2/${doc}/${idespe}`);
  }

  getHoras() {
    return this.http.get(`${this.apiUrlhora}`);
  }

  getHora(id: string) {
    return this.http.get(`${this.apiUrlhora}/${id}`);
  }

  getHorarios() {
    return this.http.get(`${this.apiUrlhorario}`);
  }

  getHfilterespecialista(idespe: string, dia: string) {
    return this.http.get(`${this.apiUrlhorario}/filtro/${idespe}/${dia}`);
  }

  getHorario(id: string) {
    return this.http.get(`${this.apiUrlhorario}/${id}`);
  }

  getPacientes() {
    return this.http.get(`${this.apiUrlpaciente}`);
  }

  getPaciente(id: string) {
    return this.http.get(`${this.apiUrlpaciente}/${id}`);
  }
  getPacientecorreo(correo: string) {
    return this.http.get(`${this.apiUrlpaciente}/searchcorreo/${correo}`);
  }
  getPacientedoc(numero: string) {
    return this.http.get(`${this.apiUrlpaciente}/searchdoc/${numero}`);
  }
  getPacientegoogle(google: string) {
    return this.http.get(`${this.apiUrlpaciente}/login/${google}`);
  }

  // tslint:disable-next-line: no-shadowed-variable
  savePaciente(Paciente: Paciente) {
    return this.http.post(`${this.apiUrlpaciente}/create`, Paciente);
  }

  getCitas() {
    return this.http.get(`${this.apiUrlcita}`);
  }

  getCita(id: string) {
    return this.http.get(`${this.apiUrlcita}/${id}`);
  }

  saveCita(cita: Cita) {
    return this.http.post(`${this.apiUrlcita}/create`, cita);
  }
  getcitascliente(id: string) {
    return this.http.get(`${this.apiUrlcita}/usuario/${id}`);
  }

  getSendreservation(
    destiny: string,
    codigo: string) {
    return this.http.get(`${this.apiUrlreserva}/${destiny}/${codigo}`);
  }

}
