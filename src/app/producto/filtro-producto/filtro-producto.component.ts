import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';
import { ProductoModel } from '../../models/producto.model';

@Component({
  selector: 'app-filtro-producto',
  standalone: true,
  imports: [],
  templateUrl: './filtro-producto.component.html',
  styleUrl: './filtro-producto.component.css'
})
export class FiltroProductoComponent implements OnInit {

  filtroFormulario!: FormGroup;
  productosFiltrados: ProductoModel[] = [];
  
  constructor(private formBuilder: FormBuilder, private productoService: ProductoService) { }
  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(): void {
    this.filtroFormulario = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      tipoProducto: [''],
      estado: [false]
    });
  }

  buscar(): void {
    const filtro = this.filtroFormulario.value;
    this.productoService.getDatosFiltrados(filtro).subscribe(
      (productos: ProductoModel[]) => {
        this.productosFiltrados = productos;
      }
    );
  }

}
