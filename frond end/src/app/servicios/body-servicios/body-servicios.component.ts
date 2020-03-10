import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-body-servicios',
  templateUrl: './body-servicios.component.html',
  styleUrls: ['./body-servicios.component.css']
})
export class HeaderbodyServiciosComponent implements OnInit {
  // servicio: any;
  servicio: any = [] ;
  constructor(
    private servicioService: ServicioService
    ) { }

  ngOnInit() {
    this.getServicios();
  }
  getServicios() {
    this.servicioService.getServicios().subscribe(
      res => {
        this.servicio = res;
      },
      err => console.error(err)
    );
  }
}

