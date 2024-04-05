import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductoComponent } from './producto/producto.component';
import { PaisComponent } from './pais/pais.component';
import { GuardarProductoComponent } from './producto/guardar-producto/guardar-producto.component';

export const routes: Routes = [ 
    {path: '', component: HomeComponent}, 
    {path: 'pais', component: PaisComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'guardar-producto', component: GuardarProductoComponent},
    {path: 'login', component: LoginComponent} ];
