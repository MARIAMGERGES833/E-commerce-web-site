import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/assets/core/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private _authService : AuthService , private _router : Router){
  }

 isLoading:boolean = false
 ApiError:string = ""

  signinForm : FormGroup = new FormGroup({
    email : new FormControl('' , [Validators.required, Validators.email]),
    password : new FormControl('' , [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/) ] ),
  })


  ngOnInit(): void{
    this._authService.atStart()

  }

  signin( signinForm : FormGroup){
   if(signinForm.valid){
    this.isLoading=true
    this._authService.signIn(signinForm.value).subscribe( {
      next : (data:any)=>{
       if(data.message === 'success'){
        console.log(data)
        localStorage.setItem('userToken' , data.token)
        this._authService.decodedData();
        this.isLoading=false
        this._router.navigate(["/home"])
       }
      },
      error: (err : any ) => {
        console.log(err)
           this.ApiError = err.error.message

      }
    })

   }
  }


 
    
  }

