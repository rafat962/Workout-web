import { NgModule } from '@angular/core';
import { Current_trainingComponent } from './Current_training/Current_training.component';
import { New_trainingComponent } from './new_training/new_training.component';
import { Past_trainingComponent } from './past_training/past_training.component';
import { TrainingComponent } from './training.component';
import { SharedModule } from '../shared/SharedModule';
import { TrainingRoutingModule } from './trainingRoutingModule';

@NgModule({
  declarations: [
    TrainingComponent,
    New_trainingComponent,
    Past_trainingComponent,
    Current_trainingComponent,
  ],
  imports: [SharedModule, TrainingRoutingModule],
  exports: [],
})
export class trainingModule {}
