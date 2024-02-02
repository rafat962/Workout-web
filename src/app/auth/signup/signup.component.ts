import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthservicesService } from '../auth.services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private auth: AuthservicesService,
    private router: Router
  ) {}

  myform!: FormGroup;
  ngOnInit() {
    this.myform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(4)]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.min(4),
      ]),
      date: new FormControl('', [Validators.required]),
    });
  }

  senddata() {
    if (this.myform.value.password === this.myform.value.confirmPassword) {
      if (this.myform.valid) {
        const data = {
          email: this.myform.value.email,
          password: this.myform.value.password,
          returnSecureToken: true,
        };
        this.auth.signup(data).subscribe(
          (data) => {
            console.log(data);
            this.auth.isauth = true;
            this.router.navigate(['/train']);
          },
          (error: any) => {
            this.toastr.error(error);
          }
        );
      }
    } else {
      this.toastr.error('ConfirmPassword must match Password');
    }
  }
}
