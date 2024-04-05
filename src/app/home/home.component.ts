
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent{
  constructor(private router: Router) { }

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
