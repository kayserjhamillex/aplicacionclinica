import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from 'src/app/models/Contacto';

@Component({
  selector: 'app-body-contact',
  templateUrl: './body-contact.component.html',
  styleUrls: ['./body-contact.component.css']
})
export class BodyContactComponent implements OnInit {
  contacto: Contacto = {
    id: 0,
    Nombre: '',
    Asunto: '',
    Correo: '',
    Mensaje: ''
  };
  constructor(
    private toastr: ToastrService,
    private contactoService: ContactoService
    ) { }
  savecontacto() {
    delete this.contacto.id;
    console.log(this.contacto);
    this.contactoService.saveContacto(this.contacto).subscribe(
      res => {
        console.log(res);
        this.contacto = res;
        this.toastr.success('se registro el contacto');
        const codigaso = this.contacto.id.toString();
        this.contactoService.getSendContacto(codigaso).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            console.log(res);
            this.toastr.success('se envio el correo');
          },
          err => {
            console.error(err);
            this.toastr.success('no se pudo enviar el correo');
          }
        );
      },
      err => {
        console.error(err);
        this.toastr.error('no se registra el contacto');
      }
    );
  }
  ngOnInit() {
  }
}
