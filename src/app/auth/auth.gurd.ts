import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Training_serviceService } from '../training/training_service.service';
import { AuthservicesService } from './auth.services.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthservicesService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    console.log('AuthGuard canActivate');
    if (this.auth.isauth) {
      console.log('User is authenticated');
      return true;
    } else {
      console.log('User is not authenticated. Redirecting to login.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
