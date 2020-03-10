import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Especialista } from '../../../models/Especialista';
import { CitaService } from '../../../services/cita.service';

@Component({
  selector: 'app-bodyelegirhorario',
  templateUrl: './bodyelegirhorario.component.html',
  styleUrls: ['./bodyelegirhorario.component.css']
})
export class BodyelegirhorarioComponent implements OnInit {
  especialista1: Especialista = {
    id: 0,
    EspecialidadId: 0,
    DoctorId: 0,
    especialidad: {
      id: 0,
      Name: '',
      Precio: 0,
      Atencion: ''
    },
    doctor: {
      id: 0,
      Fullname: '',
      Email: ''
    }
  };
  especialista: any = this.especialista1;
  citas: any = [];
  citasfiltradas: any = [];
  filtro: any = [];
  wasaa: any = [];
  horario: any = [];
  hora: any = [];
  horafiltrada: any = [];
  numerodia;
  nombredia;
  lafecha: Date;
  fechasa;
  fechaselect;
  wasa: string;
  doctorselected;
  especialidadselected;
  fecha;
  codigohora;
  horarioelegido = [];
  horariosinrepetidos: any;
  nohaycitas = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private citaService: CitaService,
    private toastr: ToastrService) { }
  getCitas() {
    this.citaService.getCitas().subscribe(
      res => {
        this.citas = res;
        const array1 = this.citas;
        // console.log(array1);
        const numero = (this.fecha / 1000);
        // console.log(numero);
        const citasfecha = [];
        for (const obj1 of array1) {
          const numfecha = new Date(obj1.Fechacita).getTime();
          // console.log(numfecha);
          const numeroselect = (numfecha / 1000);
          // console.log(numeroselect);
          if (numeroselect === numero) {
            // console.log("entroalv");
            citasfecha.push(obj1);
            this.citasfiltradas = citasfecha;
            // console.log(this.citasfiltradas);
          }
        }
        console.log(this.citasfiltradas);
      },
      err => console.error(err)
    );
  }
  getHoras() {
    this.citaService.getHoras().subscribe(
      res => {
        this.hora = res;
      },
      err => console.error(err)
    );
  }
  ngOnInit() {
    this.getHoras();
    this.getCitas();
    // tslint:disable-next-line: radix
    const doctor = parseInt(this.activatedRoute.snapshot.paramMap.get('iddoct'));
    // tslint:disable-next-line: radix
    const especialidad = parseInt(this.activatedRoute.snapshot.paramMap.get('idespe'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    this.doctorselected = doctor;
    this.especialidadselected = especialidad;
    this.fecha = fecha;
    // es esta parte se fitra a travez de parametros a el especialista
    // logrando obtener un solo objeto
    if (doctor && especialidad) {
      this.citaService.getfilterobject(this.doctorselected, this.especialidadselected).subscribe(
        res => {
          console.log(res);
          this.especialista = res;
          this.lafecha = new Date(fecha);
          this.fechasa = this.lafecha.setDate(this.lafecha.getDate() + 1);
          console.log(this.fechasa);
          this.fechaselect = new Date(this.fechasa);
          console.log(this.fechaselect);
          const array = [
            'domingo',
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes',
            'sabado'
          ];
          this.numerodia = this.fechaselect.getUTCDay() - 1;
          console.log(this.numerodia);
          this.nombredia = array[this.numerodia];
          console.log(this.nombredia);
          // se obtiene el horario filtrado desde el apirest
          // los filtros son id especialista y el nombre del dia de la fecha elegida
          if (this.nombredia && this.especialista.id) {
            this.wasa = this.especialista.id.toString();
            console.log(this.wasa);
            // filtramos los horarios mediante el api
            // con el nombre del dia y con el codigo especialista
            this.citaService.getHfilterespecialista(this.wasa, this.nombredia).subscribe(
              // tslint:disable-next-line: no-shadowed-variable
              res => {
                this.horario = res;
                const wasa1 = this.horario;
                if (Object.entries(this.horario).length > 0) {
                  this.toastr.success('fecha valida');
                } else if (Object.entries(this.horario).length === 0) {
                  this.toastr.error('fecha invalida');
                  this.nohaycitas = true;
                }
                const wasa2 = this.citasfiltradas;
                if (Object.entries(this.citasfiltradas).length > 0) {
                  // comprobamos si exiten citas para poder filtrarlas
                  // evitar que esas citas esten disponibles para el cliente
                  console.log('la fecha tiene citas');
                  for (const filtro1 of wasa1) {
                    const pos = wasa1.indexOf(filtro1);
                    console.log(pos);
                    for (const filtro2 of wasa2) {
                      if (filtro1.id === filtro2.HorarioId) {
                        console.log('se encontro coincidencia');
                        const position = pos;
                        console.log(position);
                        wasa1.splice(position, 1);
                      }
                    }
                  }
                  const wasa = wasa1;
                  const mishi = this.hora;
                  const filtrado = [];
                  for (const obj1 of mishi) {
                    for (const obj2 of wasa) {
                      if (obj1.id === obj2.HoraId) {
                        console.log('entrando dato');
                        filtrado.push(obj1);
                        console.log('cojiendo dato');
                        this.horafiltrada = filtrado;
                      }
                    }
                  }
                  console.log(this.horafiltrada);
                } else if (Object.entries(this.citasfiltradas).length === 0) {
                  console.log('la fecha no tiene ninguna cita');
                  const wasa = this.horario;
                  console.log(wasa);
                  // este array masivo ya esta establecido
                  const mishi = this.hora;
                  console.log(mishi);
                  const filtrado = [];
                  // se recibe la no coincidencia y se procede a filtrar
                  // con los datos de hora
                  for (const obj1 of mishi) {
                    for (const obj2 of wasa) {
                      if (obj1.id === obj2.HoraId) {
                        // console.log("entrando dato");
                        filtrado.push(obj1);
                        // console.log("cojiendo dato");
                        this.horafiltrada = filtrado;
                        // console.log(this.horafiltrada);
                      }
                    }
                  }
                  console.log(this.horafiltrada);
                }
              },
              err => {
                this.toastr.error('no hay horarios disponibles para esta fecha');
              }
            );
          }
        },
        err => console.log(err)
      );
    }
  }
  atras() {
    // tslint:disable-next-line: radix
    const codigaso = this.especialidadselected;
    this.router.navigate(
      [
        'reservas',
        'selectdate',
        codigaso
      ]
    );
  }
  elejirhora(waaaaa) {
    // console.log(waaaaa);
    this.codigohora = waaaaa;
    // console.log(this.codigohora);
    const arrayhorarios = this.horario;
    let codigohorario;
    // console.log(arrayhorarios);
    for (const general of arrayhorarios) {
      if (general.HoraId === this.codigohora) {
        console.log('se esta opteniendo el id');
        this.horarioelegido = general;
        codigohorario = general.id;
      }
    }
    // console.log(this.horarioelegido);
    // console.log(codigohorario);
    this.toastr.success('horario elegido');
    this.router.navigate(
      [
        'reservas',
        'singin',
        this.especialidadselected,
        this.fecha,
        codigohorario
      ]
    );
  }
}
