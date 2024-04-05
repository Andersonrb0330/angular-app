import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoProductoModel } from '../../models/tipoProducto.model';
import { ProductoModel } from '../../models/producto.model';
import { ProductoService } from '../../service/producto.service';
import { TipoProductoServiceService } from '../../service/tipo-producto-service.service';

@Component({
  selector: 'app-guardar-producto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './guardar-producto.component.html',
  styleUrl: './guardar-producto.component.css'
})
export class GuardarProductoComponent implements OnInit {
  ProductoFormulario!: FormGroup;
  tiposProducto: TipoProductoModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productoService: ProductoService,
    private tipoProductoService: TipoProductoServiceService
  ) {}

  ngOnInit(): void {
    this.crearFormulario2();
    this.crearFormulario();
    this.obtenerTiposProducto();
  }

  crearFormulario2(): void {
    this.ProductoFormulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      idTipoProducto: ['', Validators.required],
      precio: [0, Validators.required],
      stock: [0, Validators.required],
      estado: [false, Validators.required]
    });
  }

  guardarProducto() {
    if (this.ProductoFormulario.valid) {
      const producto: ProductoModel = {
        id: 0, // Este valor se asignará en el servidor al crear el producto
        nombre: this.ProductoFormulario.get('nombre')?.value,
        descripcion: this.ProductoFormulario.get('descripcion')?.value,
        idTipoProducto: this.ProductoFormulario.get('idTipoProducto')?.value,
        precio: this.ProductoFormulario.get('precio')?.value,
        stock: this.ProductoFormulario.get('stock')?.value,
        estado: this.ProductoFormulario.get('estado')?.value
      };
      
      // Llamar al método para guardar el producto en el servicio
      this.productoService.guardarProducto(producto).subscribe(
        response => {
          console.log('Producto guardado correctamente:', response);
          // Aquí puedes manejar la respuesta del servidor si es necesario
        },
        error => {
          console.error('Error al guardar el producto:', error);
          // Maneja el error de acuerdo a tus necesidades
        }
      );
    }
  }

  crearFormulario(): void {
    this.ProductoFormulario = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      idTipoProducto: [''],
      precio: [''],
      stock: [''],
      estado: [false]
    });
  }

  obtenerTiposProducto(): void {
    this.tipoProductoService.obtenerTiposProducto().subscribe(
      (tipos) => {
        this.tiposProducto = tipos;
      },
    );
  }
}
