import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-open',
  templateUrl: './dialog-open.component.html',
  styleUrls: ['./dialog-open.component.css'],
})
export class DialogOpenComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOpenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false); // User clicked "No"
  }

  onYesClick(): void {
    this.dialogRef.close(true); // User clicked "Yes"
  }
}
