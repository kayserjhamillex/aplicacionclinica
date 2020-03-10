import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/Contacto';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {
    apiUrlcontacto = 'https://quiet-journey-49563.herokuapp.com/contacto';
    // apiUrlcontactosend = 'https://quiet-journey-49563.herokuapp.com/contato/contacto';
    constructor(private http: HttpClient) { }

    getContactos() {
        return this.http.get(`${this.apiUrlcontacto}`);
    }

    getContacto(id: string) {
        return this.http.get(`${this.apiUrlcontacto}/${id}`);
    }

    saveContacto(contacto: Contacto) {
        return this.http.post(`${this.apiUrlcontacto}/create`, contacto);
    }

    getSendContacto(id: string) {
        return this.http.get(`${this.apiUrlcontacto}/contacto/${id}`);
      }
}
