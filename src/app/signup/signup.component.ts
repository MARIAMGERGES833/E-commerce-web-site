import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/assets/core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {
  }

  isLoading: boolean = false;
  ApiError: string = '';

  ngOnInit(): void {
    this._authService.atStart()

  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/),
    ]),
    rePassword: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(13),
    ]),
  }
  ,{
    validators : this.validateRepassword
  }
  );


  validateRepassword(registerForm : any){
   let passwordControl = registerForm.get("password")
   let rePasswordControl = registerForm.get("rePassword")


   if( passwordControl.value == rePasswordControl.value){
    return null;
   }else{
    rePasswordControl.setErrors({rePasswordNotMatch : "password and rePassword should be matched"})
    return {rePasswordNotMatch : "password and rePassword should be match"}
   }
  }

  register(registerForm : FormGroup) {
    if (registerForm.valid) {
      this.isLoading = true;
       console.log(registerForm.value)
      this._authService.signUp(registerForm.value).subscribe({
        next: (data: any) => {
          console.log(data);
          this.isLoading = false;
          this._router.navigate(['/signin']);
        },
        error: (err: any) => {
          console.log(err);
          this.ApiError = err.error.message;
          // console.log(this.ApiError);
        },
      });
    }
  }
}
