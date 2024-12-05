import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { error } from 'console';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 a:any[]=[];


 profileForm = new FormGroup({
  firstName: new FormControl('',[Validators.maxLength(10),Validators.required]),
  lastName: new FormControl(''),

});
  constructor(private auth:AuthService){}


  getUserdeta(){

    this.auth.getUserDetails().subscribe({
      next:(data:any)=>{
        this.a=data
      },
      error
    })

  }
}
