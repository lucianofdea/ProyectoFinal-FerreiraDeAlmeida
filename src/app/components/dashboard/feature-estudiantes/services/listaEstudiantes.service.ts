import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesService {

  ListaEstudiantes=  [
    {id:1,nombre: "Giuliana",apellido:"Carnevalle", edad:24,telefono:3513681530, correo: 'gcarnevalle@gmail.com'},
    {id:2,nombre: "Martina",apellido:"Lopez",edad: 30, telefono: 3516895320, correo: 'mlopez@gmail.com'},
    {id:3,nombre: "Juana", apellido:"Gonzalez", edad: 28, telefono: 113589624 , correo: 'jgonzalez@gmail.com'},
    {id:4,nombre: "Paula", apellido:"Villecco", edad: 19, telefono: 112568429 , correo: 'pvillecco@gmail.com'},
    {id:5,nombre: "Belen", apellido:"Paulus", edad: 29, telefono: 3518524930 , correo: 'bpaulus@gmail.com'},
    {id:6,nombre: "Andres", apellido:"Grzlak", edad: 35, telefono: 3518426012 , correo: 'agrzlak@gmail.com'},
    {id:7,nombre: "Ariel",  apellido:"Vercellone",edad: 40, telefono: 115238400, correo: 'avercellone@gmail.com'},
    {id:8,nombre: "Simon", apellido:"Sanchez", edad: 18, telefono: 3518426590 , correo: 'ssanchez@gmail.com'},
    {id:9,nombre: "Thiago", apellido:"Mambrin", edad: 31, telefono: 11523877, correo: 'tmambrin@gmail.com'},
    {id:10,nombre: "Andres", apellido:"Grzlak", edad: 35, telefono: 3518426012 , correo: 'agrzlak@gmail.com'},
    {id:11,nombre: "Giuliana",apellido:"Carnevalle", edad:24,telefono:3513681530, correo: 'gcarnevalle@gmail.com'},
    {id:12,nombre: "Martina",apellido:"Lopez",edad: 30, telefono: 3516895320, correo: 'mlopez@gmail.com'},
    {id:13,nombre: "Juana", apellido:"Gonzalez", edad: 28, telefono: 113589624 , correo: 'jgonzalez@gmail.com'},
    {id:14,nombre: "Paula", apellido:"Villecco", edad: 19, telefono: 112568429 , correo: 'pvillecco@gmail.com'},
    {id:15,nombre: "Belen", apellido:"Paulus", edad: 29, telefono: 3518524930 , correo: 'bpaulus@gmail.com'},
    {id:16,nombre: "Andres", apellido:"Grzlak", edad: 35, telefono: 3518426012 , correo: 'agrzlak@gmail.com'},
    {id:17,nombre: "Ariel",  apellido:"Vercellone",edad: 40, telefono: 115238400, correo: 'avercellone@gmail.com'},
    {id:18,nombre: "Simon", apellido:"Sanchez", edad: 18, telefono: 3518426590 , correo: 'ssanchez@gmail.com'},
    {id:19,nombre: "Thiago", apellido:"Mambrin", edad: 31, telefono: 11523877, correo: 'tmambrin@gmail.com'},
    {id:20,nombre: "Andres", apellido:"Grzlak", edad: 35, telefono: 3518426012 , correo: 'agrzlak@gmail.com'},
  ];
  constructor() { }

  getEstudiantes(){
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number){
    this.ListaEstudiantes.splice(index, 1);
  }

  editarEstudiante(estudiante: EstudiantesLista){
      const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id)
      this.ListaEstudiantes[index] = estudiante;
  }

  agregarEstudiante(estudiante: EstudiantesLista){
    this.ListaEstudiantes.unshift(estudiante);

  }

  editEstudiante(estudiante: EstudiantesLista) {
    const index = this.ListaEstudiantes.findIndex(c => c.id === estudiante.id);
    this.ListaEstudiantes[index] = estudiante;


  }
}