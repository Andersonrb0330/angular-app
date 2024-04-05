import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaisModel } from '../models/pais.model';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pais.component.html',
  styleUrl: './pais.component.css'
})
export class PaisComponent {
  data: PaisModel[] = [];

  constructor(private apiService:  ApiService,
              private router: Router) {}
  
  ngOnInit(): void {
   this.llevarData();
  }

  llevarData(){
    this.apiService.getData().subscribe(respuesta => {
      this.data = respuesta;
      console.log(this.data);
    })
  }

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
