import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  form:FormGroup;
  loading:boolean = false;
  hide = true;

  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    // console.log(this.form);
    const usuario = this.form.value.usuario;
    const contraseña = this.form.value.contraseña;
    // console.log(usuario, contraseña);

    if(usuario === 'admin' && contraseña === 'admin'){
      
      this.cargando();    
     
    }else{
      this.cargando();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Usuario o contraseña incorrecta','', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2000,
    })
  }
  
  cargando(){
    this.loading=true;
    setTimeout(() => {      
      this.router.navigate(['dashboard']);
    }, 1500);
  }
}
