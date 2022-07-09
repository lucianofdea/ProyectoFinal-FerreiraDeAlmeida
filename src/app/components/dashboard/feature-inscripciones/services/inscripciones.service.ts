import { Inscripciones } from './../../../../shared/interfaces/inscripciones';

import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {

  inscripciones=  [
    {id:1,nombre: "Giuliana", apellido:"Carnevalle", curso: 'Angular',dias:"Lunes y Miercoles"},
    {id:2,nombre: "Martina",  apellido:"Lopez",curso: 'Angular',dias:" Miercoles"},
    {id:3,nombre: "Juana", apellido:"Gonzalez", curso: 'Vue',dias:"Martes y Jueves"},
    {id:4,nombre: "Paula", apellido:"Villecco", curso: 'React',dias:"Lunes y Miercoles"},
    {id:5,nombre: "Belen", apellido:"Paulus", curso: 'Angular',dias:"Sábado"},
    {id:6,nombre: "Ariana", apellido:"Zago", curso: 'Vue',dias:"Lunes y Miercoles"},
    {id:7,nombre: "Andres",  apellido:"Grzlak",curso: 'React',dias:"Viernes"},
    {id:8,nombre: "Ariel", apellido:"Vercellone", curso: 'Angular',dias:"Lunes y Miercoles"},
    {id:9,nombre: "Thiago", apellido:"Mambrin", curso: 'Vue',dias:"Lunes y Miercoles"},
    {id:10,nombre: "Lara",  apellido:"Rivero",curso: 'React',dias:"Martes y Jueves"},
    {id:11,nombre: "Simon", apellido:"Sanchez", curso: 'Angular',dias:"Martes y Jueves"},
    {id:12,nombre: "Valentina", apellido:"Margaria", curso: 'Vue',dias:"Lunes y Miercoles"},
    {id:13,nombre: "Belen", apellido:"Paulus", curso: 'Angular',dias:"Sábado"},
    {id:14,nombre: "Ariana", apellido:"Zago", curso: 'Vue',dias:"Lunes y Miercoles"},
    {id:15,nombre: "Andres",  apellido:"Grzlak",curso: 'React',dias:"Sábado"},
    {id:16,nombre: "Ariel", apellido:"Vercellone", curso: 'Angular',dias:"Miercoles"},
    {id:17,nombre: "Thiago", apellido:"Mambrin", curso: 'Vue',dias:"Viernes"},
    {id:18,nombre: "Lara",  apellido:"Rivero",curso: 'React',dias:"Viernes"},
    {id:19,nombre: "Simon", apellido:"Sanchez", curso: 'Angular',dias:"Lunes y Miercoles"},
    {id:20,nombre: "Valentina", apellido:"Margaria", curso: 'Vue',dias:"Miercoles"},
    
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