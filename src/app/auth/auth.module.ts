import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SharedModule } from '../shared/SharedModule';
import { AuthRoutingModule } from './auth-routing';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [SharedModule, AuthRoutingModule],
  exports: [],
})
export class AuthModule {}
