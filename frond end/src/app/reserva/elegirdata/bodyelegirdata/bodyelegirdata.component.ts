import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Especialidad } from '../../../models/Especialidad';
import { CitaService } from '../../../services/cita.service';

@Component({
  selector: 'app-bodyelegirdata',
  templateUrl: './bodyelegirdata.component.html',
  styleUrls: ['./bodyelegirdata.component.css']
})
export class BodyelegirdataComponent implements OnInit {
  fechainicio = new Date();
  doctor: any;
  doctor1: any;
  especialista: any;
  especialista1: any;
  especialidad: Especialidad = {
    id: 0,
    Name: '',
    Resumen: '',
    Descripcion: '',
    Precio: 0,
    Atencion: '',
    IconoEspecialidad: '',
    ImagenEspecialidad: ''
  };
  alv = {
    especialidad: 0,
    Fechacita: 0,
    pinshifecha: new Date(),
    codigo: 0
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private citaService: CitaService,
    private toastr: ToastrService) { }
  getDoctors() {
    this.citaService.getDoctors().subscribe(
      res => {
        this.doctor = res;
      },
      err => console.error(err)
    );
  }
  ngOnInit() {
    this.getDoctors();
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.citaService.getEspecialidad(params.id).subscribe(
        res => {
          console.log(res);
          this.especialidad = res;
          const codigo = params.id;
          const codigoespecialidad = codigo.toString();
          console.log(codigoespecialidad);
          this.citaService.getfilterespecialidad(codigoespecialidad).subscribe(
            // tslint:disable-next-line: no-shadowed-variable
            res => {
              this.especialista1 = res;
              const wasa = this.especialista1;
              console.log(wasa);
              console.log(this.doctor);
              const mishi = this.doctor;
              console.log(mishi);
              const filtrado = [];
              for (const obj1 of mishi) {
                for (const obj2 of wasa) {
                  if (obj1.id === obj2.DoctorId) {
                    console.log('wasaaaa');
                    filtrado.push(obj1);
                    console.log('cojio dato');
                    console.log(filtrado);
                    this.doctor1 = filtrado;
                  }
                }
              }
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      );
    }
  }
  dateandid(fecha: Date, codigo) {
    const fechainicio = this.fechainicio.getTime();
    console.log(fechainicio);
    const params = this.activatedRoute.snapshot.params;
    this.alv.Fechacita = new Date(this.alv.pinshifecha).getTime();
    this.alv.codigo = codigo;
    this.alv.especialidad = params.id;
    console.log(this.alv);
    if (this.alv.Fechacita > fechainicio) {
      // this.toastr.info('fecha valida');
      this.router.navigate(
        [
          'reservas',
          'selecttime',
          this.alv.especialidad,
          this.alv.codigo,
          this.alv.Fechacita
        ]
      );
    } else {
      this.toastr.error('por favor seleccione una fecha a partir de mañana');
    }
  }
}
