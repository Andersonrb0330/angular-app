import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { PaisModel } from '../models/pais.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  data: PaisModel[] = [];

  constructor(private apiService:  ApiService) {

  }
  ngOnInit(): void {
   this.llevarData();
  }

  llevarData(){
    this.apiService.getData().subscribe(respuesta => {
      this.data = respuesta;
      console.log(this.data);
    })
  }
}
