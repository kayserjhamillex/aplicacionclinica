import { ToastrService } from 'ngx-toastr';
import { Cita } from 'src/app/models/Cita';
import { Horario } from 'src/app/models/Horario';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { Router, ActivatedRoute } from '@angular/router';
import { Especialidad } from 'src/app/models/Especialidad';
import { CitaService } from 'src/app/services/cita.service';
import { CulqiService } from 'src/app/services/culqi.service';

@Component({
  selector: 'app-bodypasarela',
  templateUrl: './bodypasarela.component.html',
  styleUrls: ['./bodypasarela.component.css']
})
export class BodypasarelaComponent implements OnInit {
  horariosolo: Horario = {
    id: 0,
    Dia: '',
    EspecialistaId: 0,
    HoraId: 0,
    especialista: {
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
    },
    hora: {
      id: 0,
      Horainicio: '',
      Horafin: ''
    }
  };
  horariosoloo: any = this.horariosolo;
  cita: Cita = {
    id: 0,
    Fechacita: new Date(),
    Pago: false,
    AdminId: 0,
    PacienteId: 0,
    HorarioId: 0,
    Estado: 'reservado',
    admin: {
      id: 0,
      Fullname: '',
      Correo: ''
    },
    paciente: {
        id: 0,
        Fullname: '',
        Email: '',
    },
    horario: {
      id: 0,
      Dia: '',
      EspecialistaId: 0,
      HoraId: 0,
      especialista: {
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
      },
      hora: {
          id: 0,
          Horainicio: '',
          Horafin: ''
      }
    }
  };
  cita1: Cita = {
    id: 0,
    Fechacita: new Date(),
    Pago: false,
    AdminId: 0,
    PacienteId: 0,
    HorarioId: 0,
    Estado: 'reservado',
    admin: {
      id: 0,
      Fullname: '',
      Correo: ''
    },
    paciente: {
        id: 0,
        Fullname: '',
        Email: '',
    },
    horario: {
      id: 0,
      Dia: '',
      EspecialistaId: 0,
      HoraId: 0,
      especialista: {
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
      },
      hora: {
          id: 0,
          Horainicio: '',
          Horafin: ''
      }
    }
  };
  citaa: any = this.cita1;
  mensaje;
  paciente: Paciente = {
    id: 0,
    Fullname: '',
    Fechana: new Date(),
    Genero: '',
    Tipodocumento: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    Imagenpaciente: ''
  };
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
  activar = false;
  especialidadselected;
  fecha;
  horarioelegido: number;
  lafecha: Date;
  data: any;
  wasa;
  sepago = false;
  wasaaa = false;
  nombreespecialidad;
  precioconsulta;
  citas: any = [];
  citasfiltradas: any = [];
  pacientito;
  coincidehora = false;
  codigohora;
  codigodoctor;
  codigoespecialidad;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private citaService: CitaService,
    private culqiService: CulqiService,
    private toastr: ToastrService) {
   }
   atras() {
     // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    const navfecha = fecha;
    const navdoc = this.codigodoctor;
    const navespe = this.codigoespecialidad;
    this.router.navigate(
      [
        'reservas',
        'selecttime',
        navespe,
        navdoc,
        navfecha
      ]
    );



   }
   getCitas() {
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    const numero = (fecha / 1000);
    // tslint:disable-next-line: radix
    const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('idpac'));
    // tslint:disable-next-line: radix
    const horario = parseInt(this.activatedRoute.snapshot.paramMap.get('horario'));
    const horariostring = horario.toString();
    console.log(horariostring);
    // tslint:disable-next-line: no-unused-expression
    this.citaService.getHorario(horariostring).subscribe(
      res => {
        console.log(res);
        this.horariosoloo = res;
        const elcodigo = this.horariosoloo.HoraId;
        const codigodoc = this.horariosoloo.especialista.DoctorId;
        this.codigodoctor = codigodoc;
        const codigoespe = this.horariosoloo.especialista.EspecialidadId;
        this.codigoespecialidad = codigoespe;
        this.codigohora = elcodigo;
        console.log(this.codigohora);
        console.log(this.horariosoloo);
      },
      err => console.error(err)
    );

    this.citaService.getCitas().subscribe(
      res => {
        this.citas = res;
        const array1 = this.citas;
        console.log(cliente);
        const citasfecha = [];
        for (const obj1 of array1) {
          const pacientito = obj1.PacienteId;
          const numfecha = new Date(obj1.Fechacita).getTime();
          const numeroselect = (numfecha / 1000);
          if (numeroselect === numero) {
            console.log('citas del dia elegido');
            if (pacientito === cliente) {
              console.log('entroalv');
              citasfecha.push(obj1);
              this.citasfiltradas = citasfecha;
              console.log(this.citasfiltradas);
            }
          }
        }
        const citasdelpaciente: any = this.citasfiltradas;
        console.log(citasdelpaciente);
        const horaelegidajeje = this.horariosoloo.HoraId;
        for (const citasdeldia of citasdelpaciente) {
          console.log('comparando');
          console.log(horaelegidajeje);
          const codigodeverificacion = citasdeldia.horario.HoraId;
          console.log(codigodeverificacion);
          if (horaelegidajeje === codigodeverificacion) {
            console.log('esta validando coincidencia');
            this.coincidehora = true;
          }
        }
        console.log(this.citasfiltradas);
      },
      err => console.error(err)
    );
  }
  ngOnInit() {
    this.getCitas();
    this.culqiService.initCulqi();
    // tslint:disable-next-line: radix
    const especialidad = parseInt(this.activatedRoute.snapshot.paramMap.get('idespe'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const horario = parseInt(this.activatedRoute.snapshot.paramMap.get('horario'));
    // tslint:disable-next-line: radix
    const cliente = parseInt(this.activatedRoute.snapshot.paramMap.get('idpac'));
    this.especialidadselected = especialidad;
    console.log(this.especialidadselected );
    this.fecha = fecha;
    this.horarioelegido = horario;
    this.lafecha = new Date(fecha);
    const codigaso = cliente.toString();
    console.log(codigaso);
    this.citaService.getEspecialidad(this.especialidadselected).subscribe(
      res => {
        console.log(res);
        this.especialidad = res;
        this.nombreespecialidad = this.especialidad.Name;
        this.precioconsulta = this.especialidad.Precio;
      },
      err => console.log(err)
    );
    this.citaService.getPaciente(codigaso).subscribe(
      res => {
        console.log(res);
        this.paciente = res;
      },
      err => console.log(err)
    );
  }
  purchase(descripcion, precio) {
    if (this.coincidehora === true) {
      this.toastr.error('por favor elija otra hora');
    } else {
      this.culqiService.payorder(descripcion, precio);
    }
  }

  Boleta() {
    delete this.cita.id;
    this.cita.PacienteId = this.paciente.id;
    this.cita.Fechacita = this.lafecha;
    this.cita.AdminId = 1;
    this.cita.Pago = true;
    this.cita.HorarioId = this.horarioelegido;
    console.log(this.cita);
    // if (this.coincidehora === true) {
    //   this.toastr.error('por favor elija otra hora');
    // } else if (this.coincidehora === false) {
    this.citaService.saveCita(this.cita).subscribe(
      res => {
        console.log(res);
        this.data = res;
        this.wasa = this.data.id;
        this.citaService.getCita(this.wasa).subscribe(
          // tslint:disable-next-line: no-shadowed-variable
          res => {
            console.log(res);
            this.citaa = res;
            const dato1 = this.citaa.id.toString();
            const dato2 = this.citaa.paciente.Email.toString();
            console.log(dato1);
            console.log(dato2);
            this.citaService.getSendreservation(dato2, dato1).subscribe(
              // tslint:disable-next-line: no-shadowed-variable
              res => {
                console.log(res);
                this.mensaje = res;
                this.toastr.info('se envio el correo');
              },
              err => {
                console.error(err),
                this.toastr.error('no se envio el correo');
              }
            );
          }
        );
        this.router.navigate(
          [
            'reservas',
            'boleta',
            this.wasa
          ]
        );
      },
      err => console.error(err)
    );
    // }
  }
}
