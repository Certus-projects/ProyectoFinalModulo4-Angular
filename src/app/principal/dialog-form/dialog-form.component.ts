import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css'],
})
export class DialogFormComponent {
  constructor(public dialogRef: MatDialogRef<DialogFormComponent>) {}
}
