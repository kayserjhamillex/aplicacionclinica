import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// para el servidor apirest
import { HttpClientModule } from '@angular/common/http';

// modulo del paypal
import { NgxPayPalModule } from 'ngx-paypal';

// para los avisos al cliente
import { ToastrModule } from 'ngx-toastr';

// para login
import {  GoogleLoginProvider, SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

// para los formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// animates
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HeaderHomeComponent } from './home/header-home/header-home.component';
import { BodyHomeComponent } from './home/body-home/body-home.component';
import { AboutComponent } from './about/about.component';
import { HeaderAboutComponent } from './about/header-about/header-about.component';
import { BodyAboutComponent } from './about/body-about/body-about.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { HeaderSpecialtyComponent } from './specialty/header-specialty/header-specialty.component';
import { BodySpecialtyComponent } from './specialty/body-specialty/body-specialty.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { HeaderServiciosComponent } from './servicios/header-servicios/header-servicios.component';
import { HeaderbodyServiciosComponent } from './servicios/body-servicios/body-servicios.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderContactComponent } from './contact/header-contact/header-contact.component';
import { BodyContactComponent } from './contact/body-contact/body-contact.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderBlogComponent } from './blog/header-blog/header-blog.component';
import { BodyBlogComponent } from './blog/body-blog/body-blog.component';
import { DetailblogComponent } from './detailblog/detailblog.component';
import { HeaderDetailblogComponent } from './detailblog/header-detailblog/header-detailblog.component';
import { BodyDetailblogComponent } from './detailblog/body-detailblog/body-detailblog.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DetailspecialtyComponent } from './detailspecialty/detailspecialty.component';
import { HeaderDetailspecialtyComponent } from './detailspecialty/header-detailspecialty/header-detailspecialty.component';
import { DetailservicioComponent } from './detailservicio/detailservicio.component';
import { HeaderDetailservicioComponent } from './detailservicio/header-detailservicio/header-detailservicio.component';
import { BodyDetailservicioComponent } from './detailservicio/body-detailservicio/body-detailservicio.component';
import { BodyDetailspecialtyComponent } from './detailspecialty/body-detailspecialty/body-detailspecialty.component';
import { ElegirhorarioComponent } from './reserva/elegirhorario/elegirhorario.component';
import { PacientesingupComponent } from './reserva/pacientesingup/pacientesingup.component';
import { PacientesinginComponent } from './reserva/pacientesingin/pacientesingin.component';
import { PasarelapagoComponent } from './reserva/pasarelapago/pasarelapago.component';
import { BoletareservaComponent } from './reserva/boletareserva/boletareserva.component';
import { BodyboletaComponent } from './reserva/boletareserva/bodyboleta/bodyboleta.component';
import { HeaderboletaComponent } from './reserva/boletareserva/headerboleta/headerboleta.component';
import { HeaderelegirdataComponent } from './reserva/elegirdata/headerelegirdata/headerelegirdata.component';
import { BodyelegirdataComponent } from './reserva/elegirdata/bodyelegirdata/bodyelegirdata.component';
import { ElegirdataComponent } from './reserva/elegirdata/elegirdata.component';
import { BodyelegirhorarioComponent } from './reserva/elegirhorario/bodyelegirhorario/bodyelegirhorario.component';
import { HeaderelegirhorarioComponent } from './reserva/elegirhorario/headerelegirhorario/headerelegirhorario.component';
import { HeadersinginComponent } from './reserva/pacientesingin/headersingin/headersingin.component';
import { HeadersingupComponent } from './reserva/pacientesingup/headersingup/headersingup.component';
import { BodysingupComponent } from './reserva/pacientesingup/bodysingup/bodysingup.component';
import { BodysinginComponent } from './reserva/pacientesingin/bodysingin/bodysingin.component';
import { BodypasarelaComponent } from './reserva/pasarelapago/bodypasarela/bodypasarela.component';
import { HeaderpasarelaComponent } from './reserva/pasarelapago/headerpasarela/headerpasarela.component';
import { MireservaComponent } from './mireserva/mireserva.component';
import { BodyMireservaComponent } from './mireserva/body-mireserva/body-mireserva.component';
import { HeaderMireservaComponent } from './mireserva/header-mireserva/header-mireserva.component';
import { HeaderDetallemireservaComponent } from './detallemireserva/header-detallemireserva/header-detallemireserva.component';
import { BodyDetallemireservaComponent } from './detallemireserva/body-detallemireserva/body-detallemireserva.component';
import { DetallemireservaComponent } from './detallemireserva/detallemireserva.component';
import { RegisterComponent } from './register/register.component';
import { BodyRegisterComponent } from './register/body-register/body-register.component';
import { HeaderRegisterComponent } from './register/header-register/header-register.component';

// primeng
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import { BodyLoginComponent } from './login/body-login/body-login.component';
import { HeaderLoginComponent } from './login/header-login/header-login.component';

const config = new AuthServiceConfig(
  [
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('126510371816-nbtdi0b0oa8ek49106dgi42jqn0vapa7.apps.googleusercontent.com')
    },
    // para la pagina web en el dominio
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider('968465453568098')
    },
    // para el localhost
    // {
    //   id: FacebookLoginProvider.PROVIDER_ID,
    //   provider: new FacebookLoginProvider('2156200141339667')
    // },
  ]
);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    ErrorComponent,
    HeaderComponent,
    HomeComponent,
    HeaderHomeComponent,
    BodyHomeComponent,
    AboutComponent,
    HeaderAboutComponent,
    BodyAboutComponent,
    SpecialtyComponent,
    HeaderSpecialtyComponent,
    BodySpecialtyComponent,
    ServiciosComponent,
    HeaderServiciosComponent,
    HeaderbodyServiciosComponent,
    ContactComponent,
    HeaderContactComponent,
    BodyContactComponent,
    BlogComponent,
    HeaderBlogComponent,
    BodyBlogComponent,
    DetailblogComponent,
    HeaderDetailblogComponent,
    BodyDetailblogComponent,
    DoctorComponent,
    DetailspecialtyComponent,
    HeaderDetailspecialtyComponent,
    DetailservicioComponent,
    HeaderDetailservicioComponent,
    BodyDetailservicioComponent,
    BodyDetailspecialtyComponent,
    ElegirhorarioComponent,
    PacientesingupComponent,
    PacientesinginComponent,
    PasarelapagoComponent,
    BoletareservaComponent,
    BodyboletaComponent,
    HeaderboletaComponent,
    HeaderelegirdataComponent,
    BodyelegirdataComponent,
    ElegirdataComponent,
    BodyelegirhorarioComponent,
    HeaderelegirhorarioComponent,
    HeadersinginComponent,
    HeadersingupComponent,
    BodysingupComponent,
    BodysinginComponent,
    BodypasarelaComponent,
    HeaderpasarelaComponent,
    MireservaComponent,
    BodyMireservaComponent,
    HeaderMireservaComponent,
    HeaderDetallemireservaComponent,
    BodyDetallemireservaComponent,
    DetallemireservaComponent,
    RegisterComponent,
    BodyRegisterComponent,
    HeaderRegisterComponent,
    BodyLoginComponent,
    HeaderLoginComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPayPalModule,
    SocialLoginModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionModule,
    CalendarModule,
    ToastrModule.forRoot()
  ],
  providers: [
      {
        provide: AuthServiceConfig,
        useFactory: provideConfig
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
