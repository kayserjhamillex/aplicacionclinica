import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/Paciente';
import { Genero } from 'src/app/models/genero.model';
import { TipoDoc } from 'src/app/models/tipodoc.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { SocialUser, AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-body-login',
  templateUrl: './body-login.component.html',
  styleUrls: ['./body-login.component.css']
})
export class BodyLoginComponent implements OnInit {
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
  paciente1: Paciente = {
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
  genero: Genero[] = [
    {id: 1, name: 'Masculino'},
    {id: 2, name: 'Femenino'}
  ];
  tipodoc: TipoDoc[] = [
    {id: 1, name: 'DNI'},
    {id: 2, name: 'CARNET DE EXTRANGERIA'},
    {id: 3, name: 'PASAPORTE'},
  ];
  editarnombre;
  usuario: SocialUser;
  loggedIn: boolean;
  idespecialidad;
  fechaelegida;
  horarioelegido;
  codigopaciente;
  tienecuenta = false;
  constructor(
    private authService: AuthService,
    private citaService: CitaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }
  accederConGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    console.log(this.usuario);
    this.toastr.success('jalando algunos datos de su gmail');
  }
  accederConFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.toastr.success('cerrando cuenta');
  }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      if (user) {
        console.log(user);
        this.loggedIn = true;
        this.usuario = user;
        this.editarnombre = this.usuario.name;
      } else {
        this.loggedIn = false;
      }
    });
  }
  savePaciente() {
    delete this.paciente.id;
    this.paciente.Imagenpaciente = this.usuario.photoUrl;
    this.paciente.Email = this.usuario.email;
    this.paciente.Google = this.usuario.id;
    this.paciente.Genero = this.paciente.Genero.toUpperCase();
    this.paciente.Tipodocumento = this.paciente.Tipodocumento.toUpperCase();
    const correo = this.paciente.Email;
    const numero = this.paciente.Numerodocumento;
    this.citaService.getPacientecorreo(correo).subscribe(
      res => {
        // console.log(res);
        this.paciente1 = res;
        const wasaa = this.paciente1.Email;
        this.toastr.info(`usted ya tiene registrado el correo ${wasaa}`);
        this.tienecuenta = true;
      },
      // err => {
      //   console.log(err);
      //   this.toastr.error('no se encontro a ningun paciente');
      // }
    );
    this.citaService.getPacientedoc(numero).subscribe(
      res => {
        // console.log(res);
        this.paciente1 = res;
        const wasaa = this.paciente1.Numerodocumento;
        this.toastr.info(`usted ya tiene registrado el numero de documento ${wasaa}`);
        this.tienecuenta = true;
      },
      // err => {
      //   console.log(err);
      //   this.toastr.error('no se encontro a ningun paciente');
      // }
    );
    if (this.tienecuenta === false) {
      console.log(this.paciente);
      if (this.paciente.Fullname === '') {
        this.paciente.Fullname = this.usuario.name;
        console.log(this.paciente);
        console.log('no se introdujo nombre');
        this.citaService.savePaciente(this.paciente).subscribe(
          res => {
            console.log(res);
            this.paciente = res;
            this.codigopaciente = this.paciente.id;
            this.toastr.success('usted a sido registrado');
            this.router.navigate(
              [
                ''
              ]);
          },
          err => {
            console.error(err);
            this.toastr.error('el correo o numero de documento ya fue registrado');
          }
        );
      } else {
        console.log(this.paciente);
        console.log('se introdujo nombre');
        this.citaService.savePaciente(this.paciente).subscribe(
          res => {
            console.log(res);
            this.paciente = res;
            this.codigopaciente = this.paciente.id;
            this.toastr.success('usted a sido registrado');
            this.router.navigate(
              [
                ''
              ]);
          },
          err => {
            console.error(err);
            this.toastr.error('el correo o numero de documento ya fue registrado');
          }
        );
      }
    }// else {
     // this.toastr.info('ya se encuentra registrado su dni o su correo');
    // }
  }
}
