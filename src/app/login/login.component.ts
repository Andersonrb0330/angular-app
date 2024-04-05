import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../service/seguridad.service';
import { SeguridadModel } from '../models/seguridad.model';
import { LoginModel } from '../models/login.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit  {

  data : SeguridadModel = {};
  formulario! : FormGroup;

  constructor (
    private seguridadService : SeguridadService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.formulario = this.formBuilder.group({ 
        email: ['', null],
        clave: ['', null]
      });
    }

  login() {
    const datos = this.formulario.value;
    const logueo : LoginModel = {
      email: datos.email,
      clave: datos.clave
    };
    
    this.seguridadService.logueo(logueo).subscribe( respuesta => {
      if(respuesta == null){
       alert("Email y Contraseña Incorrectas");
      } else {
        this.data = respuesta;
        this.router.navigate(['/producto']);
      }
    });
  }
}
 