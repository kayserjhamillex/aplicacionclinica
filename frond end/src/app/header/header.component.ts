import { Paciente } from '../models/Paciente';
import { Component, OnInit } from '@angular/core';
import { CitaService } from '../services/cita.service';
import { AuthService, SocialUser, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navegador',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
  public usuario: SocialUser;
  loggedIn: boolean;
  codigopaciente;
  constructor(
    private authService: AuthService,
    private citaService: CitaService) { }
  accederConGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  accederConFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
  }
  ngOnInit() {
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
              this.codigopaciente = this.paciente.id;
            },
            err => console.log(err)
          );
        } else {
          this.loggedIn = false;
        }
      }
    );

    // this.authService.authState.subscribe((usuario)=>{
    //   this.usuario=usuario;
    //   this.loggeIn=(usuario != null);
    // })
  }
}
