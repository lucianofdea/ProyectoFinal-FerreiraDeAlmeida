import { Estudiantes, EstudiantesLista } from 'src/app/shared/interfaces/estudiantes';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListaEstudiantesService {

  ListaEstudiantes=  [
    {id:1,nombre: "Luciano",apellido:"Ferreira", edad:44,telefono:33643681530, correo: 'lucianofdea@gmail.com'},
    {id:2,nombre: "Marina",apellido:"Sanchez",edad: 34, telefono: 33246875820, correo: 'msanchez@gmail.com'},
    {id:3,nombre: "Noelia", apellido:"Gonzalez", edad: 28, telefono: 3364252789 , correo: 'ngonzalez@gmail.com'},
    {id:4,nombre: "Josefina", apellido:"Persico", edad: 59, telefono: 341452789 , correo: 'jpersico@gmail.com'},
    {id:5,nombre: "Carlos", apellido:"Caniggia", edad: 39, telefono: 3364233451 , correo: 'ccaniggia@gmail.com'},
    {id:6,nombre: "Andres", apellido:"Montenovo", edad: 22, telefono: 336428392 , correo: 'amontenovo@gmail.com'},
    {id:7,nombre: "Arturo",  apellido:"Mendez",edad: 21, telefono: 115232266, correo: 'amendez@gmail.com'},
    {id:8,nombre: "Alberto", apellido:"Sadoux", edad: 19, telefono: 3518423510 , correo: 'asadoux@gmail.com'},
    {id:9,nombre: "Pablo", apellido:"Peri", edad: 26, telefono: 11523983, correo: 'pperi@gmail.com'},
    {id:10,nombre: "Juan", apellido:"Perez", edad: 25, telefono: 3364234567 , correo: 'jperez@gmail.com'}, 
    {id:11,nombre: "Noelia", apellido:"Gonzalez", edad: 28, telefono: 3364252789 , correo: 'ngonzalez@gmail.com'},
    {id:12,nombre: "Josefina", apellido:"Persico", edad: 59, telefono: 341452789 , correo: 'jpersico@gmail.com'},
    {id:13,nombre: "Carlos", apellido:"Caniggia", edad: 39, telefono: 3364233451 , correo: 'ccaniggia@gmail.com'},
    {id:14,nombre: "Andres", apellido:"Montenovo", edad: 22, telefono: 336428392 , correo: 'amontenovo@gmail.com'},
    {id:15,nombre: "Arturo",  apellido:"Mendez",edad: 21, telefono: 115232266, correo: 'amendez@gmail.com'},
    {id:16,nombre: "Alberto", apellido:"Sadoux", edad: 19, telefono: 3518423510 , correo: 'asadoux@gmail.com'},
    {id:17,nombre: "Pablo", apellido:"Peri", edad: 26, telefono: 11523983, correo: 'pperi@gmail.com'},
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