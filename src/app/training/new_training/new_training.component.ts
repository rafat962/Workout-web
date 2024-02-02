import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Training_serviceService } from '../training_service.service';

@Component({
  selector: 'app-new_training',
  templateUrl: './new_training.component.html',
  styleUrls: ['./new_training.component.css'],
})
export class New_trainingComponent implements OnInit {
  selectedValue!: string;
  @Output() act = new EventEmitter();
  constructor(private service: Training_serviceService) {}

  ngOnInit() {}
  exercises: any[] = this.service.getexercise();
  onsubmit(f: any) {
    this.act.emit();
    this.service.getactive(f.value.training);
  }
}
