import { TipoProductoServiceService } from './../service/tipo-producto-service.service';
import { Component, OnInit } from '@angular/core';
import { ProductoModel } from '../models/producto.model';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../service/producto.service';
import { Router } from '@angular/router';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TipoProductoModel } from '../models/tipoProducto.model';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit{

  data: ProductoModel[] = [];
  ProductoFormulario! : FormGroup 
  tiposProducto: TipoProductoModel[] = [];

  constructor(private productoService:  ProductoService,
    private formBuilder: FormBuilder,
    private tipoProductoService: TipoProductoServiceService,
    private router: Router) {}

    
  ngOnInit(): void {
    this.llevarData();
    this.crearFormulario();
    this.obtenerTiposProducto();
  }

  llevarData(){
    this.productoService.getData().subscribe(respuesta => {
      this.data = respuesta;
    })
  }

  crearFormulario(): void {
    this.ProductoFormulario = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      idTipoProducto: [''],
      estado: [false]
    });
  }

  obtenerTiposProducto(): void {
    this.tipoProductoService.obtenerTiposProducto().subscribe(
      tipos => {
        this.tiposProducto = tipos;
      }
    );
  }

/////////////////////////////////////    NAVBAR = NAVIGATE     /////////////////////////////////////////////////////

  navigateToProducto() {
    this.router.navigate(['/producto']);
  }

  navigateToPais() {
    this.router.navigate(['/pais']);
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
