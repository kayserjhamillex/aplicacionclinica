import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { GoogleLoginProvider, SocialUser, AuthService, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-bodysingin',
  templateUrl: './bodysingin.component.html',
  styleUrls: ['./bodysingin.component.css']
})
export class BodysinginComponent implements OnInit {
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
    Google: ''
  };
  usuario: SocialUser;
  loggedIn: boolean;
  editarnombre;
  idespecialidad;
  fechaelegida;
  horarioelegido;
  codigopaciente;
  constructor(
    private authService: AuthService,
    private citaService: CitaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
    ) { }

  accederConGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.toastr.success('usted esta entrando a su cuenta');
  }
  accederConFacebook(): void {
    console.log(this.usuario);
    this.toastr.success('usted esta entrando a su cuenta');
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.toastr.success('cerrando la cuenta');
  }
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.citaService.getPaciente(params.id).subscribe(
        res => {
          console.log(res);
          this.paciente = res;
        },
        err => console.log(err)
      );
    }
    this.authService.authState.subscribe(
      (user) => {
        if (user) {
          console.log(user);
          this.loggedIn = true;
          this.usuario = user;
          const filtro = this.usuario.id;
          this.citaService.getPacientegoogle(filtro).subscribe(
            res => {
              console.log(res);
              this.paciente = res;
            },
            err => console.log(err)
          );
        } else {
          this.loggedIn = false;
        }
      }
    );
  }
  mandaralsingup() {
    // tslint:disable-next-line: radix
    const especialidad = parseInt(this.activatedRoute.snapshot.paramMap.get('idespe'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const horario = parseInt(this.activatedRoute.snapshot.paramMap.get('horario'));
    this.idespecialidad = especialidad;
    this.fechaelegida = fecha;
    this.horarioelegido = horario;
    this.toastr.success('procediendo a crear su cuenta');
    this.router.navigate(
      [
        'reservas',
        'singup',
        this.idespecialidad,
        this.fechaelegida,
        this.horarioelegido
      ]);
  }
  Pagar() {
    // tslint:disable-next-line: radix
    const especialidad = parseInt(this.activatedRoute.snapshot.paramMap.get('idespe'));
    // tslint:disable-next-line: radix
    const fecha = parseInt(this.activatedRoute.snapshot.paramMap.get('fecha'));
    // tslint:disable-next-line: radix
    const horario = parseInt(this.activatedRoute.snapshot.paramMap.get('horario'));
    this.idespecialidad = especialidad;
    this.fechaelegida = fecha;
    this.horarioelegido = horario;
    this.codigopaciente = this.paciente.id;
    // console.log(this.paciente);
    console.log(this.idespecialidad);
    console.log(this.fechaelegida);
    console.log(this.horarioelegido);
    console.log(this.codigopaciente);
    this.toastr.success('procediendo a realizar el pago');
    this.router.navigate(
      [
        'reservas',
        'pasarela',
        this.idespecialidad,
        this.fechaelegida,
        this.horarioelegido,
        this.codigopaciente
      ]
    );
  }
}
