import { NavigationExtras, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EstudiantesService } from './../../../services/estudiantes.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiantes } from 'src/app/interfaces/estudiantes';
import { FuentesDirective } from 'src/app/directivas/fuentes.directive';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss']
})
export class EstudiantesComponent implements OnInit {
  
  //**hijo **/  
  
  admin: boolean = false;
  

  listaEstudiantes: Estudiantes[] = [];

  displayedColumns: string[] = ['nombre', 'curso', 'nota', 'profesor', 'acciones'];
  
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _estudiantesService: EstudiantesService,private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loadView();
  }

  loadView(){
    this.cargarEstudiantes();
  }
  cargarEstudiantes(){
    this.listaEstudiantes = this._estudiantesService.getEstudiantes();
    this.dataSource = new MatTableDataSource(this.listaEstudiantes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarEstudiante(index: number){
    console.log(index);
    this._estudiantesService.eliminarEstudiante(index);
    this.cargarEstudiantes();
    this._snackBar.open('Registro de estudiante eliminado','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1500,
    })
  }
  editarEstudiante(index: number){
    console.log(index); 
    const navigationExtras: NavigationExtras = {
      state: {
        estudiante: this.listaEstudiantes[index]
      }
    }
    this.router.navigate(['/dashboard/crear-estudiante'], navigationExtras);
    
  }


 ingresarAdmin(){
   this.admin = true;
 }
 ingresarUsuario(){
   this.admin = false;
 }

}
