import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardAlumnosComponent } from '../feature/alumnos/components/dashboard-alumnos/dashboard-alumnos.component';
import { LoginComponent } from '../feature/auth/components/login/login.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [

  {
    path: 'alumnos',
    loadChildren: () =>
      import('./../feature/alumnos/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
    canActivate: [LoginGuard],
  },

  {
    path: 'cursos',
    loadChildren: () =>
      import('../feature/cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [LoginGuard],
  },

  {
    path: 'inscripciones',
    loadChildren: () =>
      import('../feature/inscripciones/inscripciones.module').then(
        (m) => m.InscripcionesModule
      ),
    canActivate: [LoginGuard],
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./../feature/usuarios/usuarios.module').then(
        (m) => m.UsuariosModule
      ),
    canActivate: [LoginGuard, AdminGuard],
  },
  {
    path: '',
    component: DashboardAlumnosComponent,
    pathMatch: 'full',
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
