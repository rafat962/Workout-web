import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Training_serviceService } from '../training_service.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogOpenComponent } from './dialog-open/dialog-open.component';

@Component({
  selector: 'app-Current_training',
  templateUrl: './Current_training.component.html',
  styleUrls: ['./Current_training.component.css'],
})
export class Current_trainingComponent implements OnInit {
  valuee = 0;
  active_Train!: any;
  CurrntTrain = '';
  counter!: any;
  @Output() actt = new EventEmitter<void>();
  constructor(
    private service: Training_serviceService,
    public dialog: MatDialog
  ) {}
  count() {
    this.counter = setInterval(() => {
      this.valuee += 10;
      if (this.valuee === 100) {
        clearInterval(this.counter);
      }
    }, (this.active_Train[0].duration * 1000) / 10);
  }
  ngOnInit() {
    this.active_Train = this.service.activeTrain;
    console.log(this.active_Train[0]);
    this.CurrntTrain = this.active_Train[0].name;
    this.count();
  }
  stop() {
    clearInterval(this.counter);
    const dialogref = this.dialog.open(DialogOpenComponent, {
      data: { message: 'Do you want to really stop training?' },
    });
    dialogref.afterClosed().subscribe((res) => {
      if (res) {
        clearInterval(this.counter);
        this.active_Train[0].durationAchived =
          this.active_Train[0].duration * (this.valuee / 100);
        this.active_Train[0].caloriesAchived =
          this.active_Train[0].duration * (this.valuee / 100) * 0.02;
        this.service.endTrain(this.active_Train);
        this.service.gettrain();
        this.actt.emit();
      } else {
        this.count();
      }
    });
  }
}
