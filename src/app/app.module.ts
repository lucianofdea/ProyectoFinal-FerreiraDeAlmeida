import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './core/app-routing.module';
import { AlumnosModule } from './feature/alumnos/alumnos.module';
import { CursosModule } from './feature/cursos/cursos.module';
import { SharedModule } from './shared/shared.module';
import { InscripcionesModule } from './feature/inscripciones/inscripciones.module';
import { UsuariosModule } from './feature/usuarios/usuarios.module';
import { AlumnosRoutingModule } from './feature/alumnos/alumnos-routing.module';
import { InscripcionesRoutingModule } from './feature/inscripciones/inscripciones-routing.module';
import { UsuariosRoutingModule } from './feature/usuarios/usuarios-routing.module';
import { CursosRoutingModule } from './feature/cursos/cursos-routing.module';
import { AuthModule } from './feature/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AlumnosRoutingModule,
    CursosRoutingModule,
    InscripcionesRoutingModule,
    UsuariosRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    AlumnosModule,
    CursosModule,
    InscripcionesModule,
    UsuariosModule,
    AuthModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      name: 'Cargar y cursos cargados en la lista',
    }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
