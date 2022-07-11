import { Inscripciones } from './../../../../shared/interfaces/inscripciones';

import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripciones=  [
    {id:1,nombre: "Luciano",apellido:"Ferreira", curso: 'Angular',dias:"Lunes y Miercoles"},
    {id:2,nombre: "Marina",apellido:"Sanchez",curso: 'Angular',dias:" Miercoles"},
    {id:3,nombre: "Noelia", apellido:"Gonzalez", curso: 'Vue',dias:"Martes y Jueves"},
    {id:4,nombre: "Josefina", apellido:"Persico", curso: 'React',dias:"Lunes y Miercoles"},
    {id:5,nombre: "Carlos", apellido:"Caniggia", curso: 'Angular',dias:"Sábado"},
    {id:6,nombre: "Andres", apellido:"Montenovo", curso: 'Vue',dias:"Lunes y Miercoles"},
    {id:7,nombre: "Arturo",  apellido:"Mendez",curso: 'React',dias:"Viernes"},
    {id:8,nombre: "Alberto", apellido:"Sadoux", curso: 'Angular',dias:"Lunes y Miercoles"},
    {id:9,nombre: "Pablo", apellido:"Peri", curso: 'Vue',dias:"Lunes y Miercoles"},
    {id:10,nombre: "Juan", apellido:"Perez",curso: 'React',dias:"Martes y Jueves"},
    {id:11,nombre: "Noelia", apellido:"Gonzalez", curso: 'Vue',dias:"Martes y Jueves"},
    {id:12,nombre: "Josefina", apellido:"Persico", curso: 'React',dias:"Lunes y Miercoles"},
    {id:13,nombre: "Carlos", apellido:"Caniggia", curso: 'Angular',dias:"Sábado"},
    {id:14,nombre: "Andres", apellido:"Montenovo", curso: 'Vue',dias:"Lunes y Miercoles"},
    {id:15,nombre: "Arturo",  apellido:"Mendez",curso: 'React',dias:"Viernes"},
    {id:16,nombre: "Alberto", apellido:"Sadoux", curso: 'Angular',dias:"Lunes y Miercoles"},
    {id:17,nombre: "Pablo", apellido:"Peri", curso: 'Vue',dias:"Lunes y Miercoles"},
    
  ];
  constructor() { }

  getInscripciones(){
    return this.inscripciones.slice();
  }

  eliminarInscripciones(index: number){
    this.inscripciones.splice(index, 1);
  }

  editarInscripciones(inscripcion: Inscripciones){
      const index = this.inscripciones.findIndex(c => c.id === inscripcion.id)
      this.inscripciones[index] = inscripcion;
  }

  agregarInscripciones(inscripcion: Inscripciones){
    this.inscripciones.unshift(inscripcion);

  }

 
}