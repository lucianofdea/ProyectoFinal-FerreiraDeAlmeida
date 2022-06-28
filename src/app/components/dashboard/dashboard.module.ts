import { PipePersonalPipe } from './../../pipe/pipe-personal.pipe';
import { FuentesDirective } from './../../directivas/fuentes.directive';
import { EditarComponent } from './editar/editar.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CrearEstudianteComponent } from './estudiantes/crear-estudiante/crear-estudiante.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    EstudiantesComponent,
    CrearEstudianteComponent,
    FuentesDirective,
    PipePersonalPipe,
    EditarComponent, 

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
