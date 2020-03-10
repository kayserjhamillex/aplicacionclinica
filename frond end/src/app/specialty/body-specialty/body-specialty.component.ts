import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';

@Component({
  selector: 'app-body-specialty',
  templateUrl: './body-specialty.component.html',
  styleUrls: ['./body-specialty.component.css']
})
export class BodySpecialtyComponent implements OnInit {
  especialidad: any = [];
  constructor(
    private especialidadService: EspecialidadService
    ) { }

  ngOnInit() {
    this.getEspecialidads();
  }
  getEspecialidads() {
    this.especialidadService.getEspecialidads().subscribe(
      res => {
        this.especialidad = res;
        console.log(this.especialidad);
      },
      err => console.error(err)
    );
  }
}
