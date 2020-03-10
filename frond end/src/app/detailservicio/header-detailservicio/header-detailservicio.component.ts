import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/Servicio';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-header-detailservicio',
  templateUrl: './header-detailservicio.component.html',
  styleUrls: ['./header-detailservicio.component.css']
})
export class HeaderDetailservicioComponent implements OnInit {
  servicio: Servicio = {
    id: 0,
    Name: '',
    Resumen: '',
    Descripcion: '',
    Iconoservicio: '',
    Imagenservicio: ''
  };
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private servicioServicio: ServicioService
    ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.servicioServicio.getServicio(params.id).subscribe(
        res => {
          console.log(res);
          this.servicio = res;
        },
        err => console.log(err)
      );
    }
  }

}
