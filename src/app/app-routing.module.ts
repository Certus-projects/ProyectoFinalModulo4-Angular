import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandesactivateGuard } from './candesactivate.guard';

import { FormularioComponent } from './principal/formulario/formulario.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';

import { VistaComponent } from './principal/vista/vista.component';

const routes: Routes = [
  { path: 'vista', component: VistaComponent, canActivate: [CanactivateGuard] },
  {
    path: 'formulario',
    component: FormularioComponent,
    canDeactivate: [CandesactivateGuard],
    canActivate: [CanactivateGuard],
  },
  { path: 'home', component: HomeComponent, canActivate: [CanactivateGuard] },

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
