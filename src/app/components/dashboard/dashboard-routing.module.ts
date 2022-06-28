import { CrearEstudianteComponent } from './estudiantes/crear-estudiante/crear-estudiante.component';
import { EditarComponent } from './editar/editar.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',component: DashboardComponent, children: [
      {path: '', component: InicioComponent},     
      {path: 'estudiantes', component: EstudiantesComponent},
      {path: 'editar', component: EditarComponent},
      {path: 'crear-estudiante', component: CrearEstudianteComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
