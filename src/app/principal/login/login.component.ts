import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = '';
  pass = '';
  userInvalid = false;
  passInvalid = false;
  errorMessage = '';
  validUser = [
    {
      user: 'admin',
      pass: 'admin',
    },
  ];
  constructor(
    private autenticacion: AutenticacionService,
    private router: Router
  ) {}

  redireccion = '';

  login() {
    this.errorMessage = '';
    if (this.user === '' || this.pass === '') {
      if (this.user === '') {
        this.userInvalid = true;
      } else {
        this.userInvalid = false;
      }
      this.errorMessage = 'Usuario y/o contraseña no pueden estar vacios';
      return;
    } else if (
      this.validUser[0].user === this.user &&
      this.validUser[0].pass === this.pass
    ) {
      this.autenticacion.login();
      this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
      this.autenticacion.urlUsuarioIntentaAcceder = '';
      this.router.navigate([this.redireccion]);
    } else {
      this.errorMessage = 'Usuario y/o contraseña incorrectos';
    }
  }
}
