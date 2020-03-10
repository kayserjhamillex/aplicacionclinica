import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { MireservaComponent } from './mireserva/mireserva.component';
import { ElegirdataComponent } from './reserva/elegirdata/elegirdata.component';
import { DetailservicioComponent } from './detailservicio/detailservicio.component';
import { PasarelapagoComponent } from './reserva/pasarelapago/pasarelapago.component';
import { DetailspecialtyComponent } from './detailspecialty/detailspecialty.component';
import { BoletareservaComponent } from './reserva/boletareserva/boletareserva.component';
import { ElegirhorarioComponent } from './reserva/elegirhorario/elegirhorario.component';
import { DetallemireservaComponent } from './detallemireserva/detallemireserva.component';
import { PacientesinginComponent } from './reserva/pacientesingin/pacientesingin.component';
import { PacientesingupComponent } from './reserva/pacientesingup/pacientesingup.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'register',
    component: LoginComponent
  },
  {
    path: 'especialidad',
    children:
    [
      {
        path: '',
        component: SpecialtyComponent
      },
      {
        path: 'detail/:id',
        component: DetailspecialtyComponent
      }
    ]
  },
  { path: 'servicios',
    children:
    [
      {
        path: '',
        component: ServiciosComponent
      },
      {
        path: 'detail/:id',
        component: DetailservicioComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'misreservas/:id',
    component: MireservaComponent
  },
  {
    path: 'detallereservas/:id',
    component: DetallemireservaComponent
  },
  {
    path: 'reservas',
    children:
    [
      {
        path: 'selectdate/:id',
        component: ElegirdataComponent
      },
      {
        path: 'selecttime/:idespe/:iddoct/:fecha',
        component: ElegirhorarioComponent
      },
      {
        path: 'singin/:idespe/:fecha/:horario',
        component: PacientesinginComponent
      },
      {
        path: 'singup/:idespe/:fecha/:horario',
        component: PacientesingupComponent
      },
      {
        path: 'pasarela/:idespe/:fecha/:horario/:idpac',
        component: PasarelapagoComponent
      },
      {
        path: 'boleta/:id',
        component: BoletareservaComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
