import { ToastrService } from 'ngx-toastr';
import { Cita } from '../../../models/Cita';
import { Hora } from '../../../models/Hora';
import { Doctor } from '../../../models/Doctor';
import { Component, OnInit } from '@angular/core';
import { Horario } from '../../../models/Horario';
import { Paciente } from '../../../models/Paciente';
import { Router, ActivatedRoute} from '@angular/router';
import { Especialidad } from '../../../models/Especialidad';
import { Especialista } from '../../../models/Especialista';
import { CitaService } from '../../../services/cita.service';

@Component({
  selector: 'app-bodyboleta',
  templateUrl: './bodyboleta.component.html',
  styleUrls: ['./bodyboleta.component.css']
})
export class BodyboletaComponent implements OnInit {
  horahoy = new Date();
  codigo = 235;
  horacita = '13:00 a 13:05';
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
  hora: Hora = {
    id: 0,
    Horainicio: '',
    Horafin: ''
  };
  horario1: Horario = {
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
  horario: any = this.horario1;
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
  cita: any = this.cita1;
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
  doctor: Doctor = {
    id: 0,
    Fullname: '',
    Fechana: new Date(),
    Genero: '',
    Celular: '',
    Email: '',
    Imagendoctor: '',
    Password: '',
    Facebook: '',
    Instagram: '',
    Twitter: ''
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private citaService: CitaService,
    private toastr: ToastrService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.toastr.success('su comprobante de su reserva de cita');
      this.citaService.getCita(params.id).subscribe(
        res => {
          console.log(res);
          this.cita = res;
          const wasa = this.cita.PacienteId.toString();
          const wasaa = this.cita.HorarioId.toString();
          if (this.cita) {
            this.citaService.getPaciente(wasa).subscribe(
              // tslint:disable-next-line: no-shadowed-variable
              res => {
                console.log(res);
                this.paciente = res;
              },
              err => console.log(err)
            );
          }
          if (this.cita) {
            this.citaService.getHorario(wasaa).subscribe(
              // tslint:disable-next-line: no-shadowed-variable
              res => {
                console.log(res);
                this.horario = res;
                const obj1 = this.horario.HoraId.toString();
                const obj2 = this.horario.EspecialistaId.toString();
                if (this.horario) {
                  this.citaService.getEspecialista(obj2).subscribe(
                    // tslint:disable-next-line: no-shadowed-variable
                    res => {
                      console.log(res);
                      this.especialista = res;
                      const obj3 = this.especialista.DoctorId.toString();
                      const obj4 = this.especialista.EspecialidadId.toString();
                      if (this.especialista) {
                        this.citaService.getDoctor(obj3).subscribe(
                          // tslint:disable-next-line: no-shadowed-variable
                          res => {
                            console.log(res);
                            this.doctor = res;
                          },
                          err => console.log(err)
                        );
                        this.citaService.getEspecialidad(obj4).subscribe(
                          // tslint:disable-next-line: no-shadowed-variable
                          res => {
                            console.log(res);
                            this.especialidad = res;
                          },
                          err => console.log(err)
                        );
                      }
                    },
                    err => console.log(err)
                  );
                }
                if (this.horario) {
                  this.citaService.getHora(obj1).subscribe(
                    // tslint:disable-next-line: no-shadowed-variable
                    res => {
                      console.log(res);
                      this.hora = res;
                    },
                    err => console.log(err)
                  );
                }
              },
              err => console.log(err)
            );
          }
        },
        err => console.log(err)
      );
    }
  }
}
