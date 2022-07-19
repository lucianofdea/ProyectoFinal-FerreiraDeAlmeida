import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CursosService } from 'src/app/core/services/curso.service';

@Pipe({
  name: 'convertirIdNombreCurso',
})
export class ConvertirIdNombreCursoPipe implements PipeTransform {
  constructor(private _cursosService: CursosService) {}

  transform(idCurso: number): Observable<any> {
    return this._cursosService.obtenerCurso(idCurso).pipe(
      map((response) => {
        return response.curso;
      })
    );
  }
}
