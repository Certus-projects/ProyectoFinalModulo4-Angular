import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  enviar() {
    // validar formulario
    if (this.form.valid) {
      this.dialog.open(DialogFormComponent, {
        width: '250px',
        enterAnimationDuration: '1000ms',
        exitAnimationDuration: '1000ms',
      });
      this.form.reset();
    } else {
      alert('Ocurrio un error');
    }
  }

  salirDeRuta(): Observable<boolean> | boolean {
    console.log('entre al canDeactivate');
    if (
      this.form.controls['name'].value === '' &&
      this.form.controls['email'].value === '' &&
      this.form.controls['message'].value === ''
    ) {
      return true;
    }
    const confirmar = confirm(
      '¿Deseas salir del formulario? Perderás todos los cambios'
    );
    return confirmar;
  }
}
