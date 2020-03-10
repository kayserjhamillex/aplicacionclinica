import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Especialidad } from 'src/app/models/Especialidad';
import { EspecialidadService } from 'src/app/services/especialidad.service';

@Component({
  selector: 'app-header-detailspecialty',
  templateUrl: './header-detailspecialty.component.html',
  styleUrls: ['./header-detailspecialty.component.css']
})
export class HeaderDetailspecialtyComponent implements OnInit {
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
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private especialidadServicio: EspecialidadService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.especialidadServicio.getEspecialidad(params.id).subscribe(
        res => {
          console.log(res);
          this.especialidad = res;
        },
        err => console.log(err)
      );
    }
  }

}
