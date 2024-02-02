import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.gurd';
import { TrainingComponent } from './training.component';

const routs: Routes = [
  { path: 'train', component: TrainingComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routs)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
