import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthservicesService } from '../auth.services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private route: Router,
    private auth: AuthservicesService
  ) {}

  myform!: FormGroup;
  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(4)]),
    });
  }

  senddata() {
    if (this.myform.valid) {
      const data = {
        email: this.myform.value.email,
        password: this.myform.value.password,
        returnSecureToken: true,
      };
      console.log(data);
      this.auth.signin(data).subscribe(
        (data) => {
          console.log(data);
          this.auth.isauth = true;
          this.route.navigate(['/train']);
        },
        (error: any) => {
          this.toastr.error(error);
        }
      );
    } else {
      this.toastr.error('Invalid');
    }
  }
}
