import { Cita } from 'src/app/models/Cita';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-body-detallemireserva',
  templateUrl: './body-detallemireserva.component.html',
  styleUrls: ['./body-detallemireserva.component.css']
})
export class BodyDetallemireservaComponent implements OnInit {
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
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private citaService: CitaService) { }

  ngOnInit() {
      const params = this.activatedRoute.snapshot.params;
      if (params.id) {
        this.citaService.getCita(params.id).subscribe(
          res => {
            console.log(res);
            this.cita = res;
          }
        );
      }
  }
}
