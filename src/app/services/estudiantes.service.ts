import { Estudiantes } from 'src/app/interfaces/estudiantes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  ListaEstudiantes: Estudiantes[] = [
    {nombre: "Luciano", apellido:"Ferreira", curso: 'Angular', nota: 8 , profesor: 'Barcinilla'},
    {nombre: "Martin",  apellido:"Lored",curso: 'Ract JS', nota: 4 , profesor: 'Suarez'},
    {nombre: "Daniela", apellido:"Martinese", curso: 'Vue', nota: 4 , profesor: 'Montenovo'},
    {nombre: "Gustavo", apellido:"Peri", curso: 'Phyton', nota: 7 , profesor: 'Perez'},
    {nombre: "Fabricio", apellido:"Flocco", curso: 'Redux', nota: 6 , profesor: 'Montiel'},
    {nombre: "Adriana", apellido:"Messi", curso: 'Docker', nota: 5 , profesor: 'Mansilla'},
    {nombre: "Paola",  apellido:"Giorgio",curso: 'React', nota: 9 , profesor: 'Fernandez'},
    {nombre: "Pablo", apellido:"Caniggia", curso: 'HTML 5', nota: 4 , profesor: 'Sanchez'},
    {nombre: "Luciano", apellido:"Ferreira", curso: 'Angular', nota: 8 , profesor: 'Barcinilla'},
    {nombre: "Martin",  apellido:"Lored",curso: 'Ract JS', nota: 4 , profesor: 'Suarez'},
    {nombre: "Daniela", apellido:"Martinese", curso: 'Vue', nota: 4 , profesor: 'Montenovo'},
    {nombre: "Gustavo", apellido:"Peri", curso: 'Phyton', nota: 7 , profesor: 'Perez'},
    {nombre: "Fabricio", apellido:"Flocco", curso: 'Redux', nota: 6 , profesor: 'Montiel'},
    {nombre: "Adriana", apellido:"Messi", curso: 'Docker', nota: 5 , profesor: 'Mansilla'},
    {nombre: "Paola",  apellido:"Giorgio",curso: 'React', nota: 9 , profesor: 'Fernandez'},
    {nombre: "Pablo", apellido:"Caniggia", curso: 'HTML 5', nota: 4 , profesor: 'Sanchez'},
    {nombre: "Luciano", apellido:"Ferreira", curso: 'Angular', nota: 8 , profesor: 'Barcinilla'},
    {nombre: "Martin",  apellido:"Lored",curso: 'Ract JS', nota: 4 , profesor: 'Suarez'},
    {nombre: "Daniela", apellido:"Martinese", curso: 'Vue', nota: 4 , profesor: 'Montenovo'},
    {nombre: "Gustavo", apellido:"Peri", curso: 'Phyton', nota: 7 , profesor: 'Perez'},
    {nombre: "Fabricio", apellido:"Flocco", curso: 'Redux', nota: 6 , profesor: 'Montiel'},
    {nombre: "Adriana", apellido:"Messi", curso: 'Docker', nota: 5 , profesor: 'Mansilla'},
    {nombre: "Paola",  apellido:"Giorgio",curso: 'React', nota: 9 , profesor: 'Fernandez'},
    {nombre: "Pablo", apellido:"Caniggia", curso: 'HTML 5', nota: 4 , profesor: 'Sanchez'},
  ];
  constructor() { }

  getEstudiantes(){
    return this.ListaEstudiantes.slice();
  }

  eliminarEstudiante(index: number){
    this.ListaEstudiantes.splice(index, 1);
  }

  agregarEstudiante(estudiante: Estudiantes){
    this.ListaEstudiantes.unshift(estudiante);
    
  }
}
