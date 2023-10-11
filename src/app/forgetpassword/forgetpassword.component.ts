import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ForgetpasswordService } from '../forgetpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  isLogin = false;


  step1 : boolean = true
  step2 : boolean = false
  step3 : boolean = false
  userEmail : any =""
  userMessage : string =""

  constructor (private _forgetpasswordService : ForgetpasswordService,
    private _router: Router){

  }
  forgetForm : FormGroup =new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  resetCodeForm : FormGroup =new FormGroup({
    resetCode: new FormControl('', [Validators.required]),
  })

  resetPasswordForm : FormGroup =new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    newPassword : new FormControl('',[Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{3,8}$/)])
    })


    forgetPassword():void{
       this.userEmail = this.forgetForm.value
       this._forgetpasswordService.forgetPassword(this.userEmail).subscribe({
        next:(res)=>{
          console.log(res)
          this.userMessage=res.message
          this.step1 = false;
          this.step2 = true;
          this.step3 = false;

        },
        error:(err)=>{
          this.userMessage=err.error.message;
          

        }
       })
    }
    resetCode():void{
      let resetCode = this.resetCodeForm.value
this._forgetpasswordService.resetCode(resetCode).subscribe({
  next:(res)=>{
    console.log(res)
    this.userMessage=res.message
    this.step1 = false;
    this.step2 = false;
    this.step3 = true ;

  },
  error:(err)=>{
    this.userMessage=err.error.message;
    

  }
 })
    }
    newPassword():void{
      console.log(`dddddddd`)
       let resetForm = this.resetPasswordForm.value;
      //  resetForm.emil = this.userEmail  ;
        this._forgetpasswordService.resetPassword(resetForm).subscribe({
        next:(res)=>{
          console.log(res)
          console.log(`rrrrrrrrrrrr`)
         if(res.token){
            localStorage.setItem("userToken",res.token)
          this._router.navigate(['/home'])
            console.log(`yeeees`)
            this.isLogin = true;

         }      
        
        },
        error:(err)=>{
          this.userMessage=err.error.message;
          
      
        }
       })
    }
}
