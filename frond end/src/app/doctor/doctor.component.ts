import { Component, OnInit } from '@angular/core';
import { ClinicaService } from '../clinica.service';
// import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctor: any;
  // doctor:any=[];
  constructor(
    // private doctorService: DoctorService,
    private clinicaService: ClinicaService) { }

  ngOnInit() {
    // this.getDoctors();
    this.doctor = this.clinicaService.ObtenerDoctor();
  }
  // getDoctors() {
  //   this.doctorService.getDoctors()
  //     .subscribe(
  //       res => {
  //         this.doctor = res;
  //       },
  //       err => console.error(err)
  //     );
  // }
}
