import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';

import { ToastrModule } from 'ngx-toastr';

import { DialogOpenComponent } from './training/Current_training/dialog-open/dialog-open.component';

import { AuthGuard } from './auth/auth.gurd';
import { AuthModule } from './auth/auth.module';
import { trainingModule } from './training/training.module';
import { SharedModule } from './shared/SharedModule';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, DialogOpenComponent],
  imports: [ToastrModule.forRoot(), AuthModule, trainingModule, SharedModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
