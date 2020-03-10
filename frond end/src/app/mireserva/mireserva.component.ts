import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CitaService } from '../services/cita.service';
import { Paciente } from '../models/Paciente';

@Component({
  selector: 'app-mireserva',
  templateUrl: './mireserva.component.html',
  styleUrls: ['./mireserva.component.css']
})
export class MireservaComponent implements OnInit {
  cita:any;
  paciente: Paciente = {
    id: 0,
    Fullname: '',
    Fechana: new Date(),
    Genero: '',
    Tipodocumento: '',
    Numerodocumento: '',
    Email: '',
    Password: '',
    Imagenpaciente: '',
    Google:''
  }
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private citaService: CitaService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.citaService.getcitascliente(params.id).subscribe(
        res =>{
          console.log(res);
          this.cita=res;
        }
      );
      this.citaService.getPaciente(params.id).subscribe(
        res =>{
          console.log(res);
          this.paciente=res;
        }
      )
    }
  }

}
