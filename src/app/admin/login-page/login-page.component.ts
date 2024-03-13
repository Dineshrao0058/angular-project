import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


form!:FormGroup
constructor(private d:FormBuilder){}
ngOnInit(): void {
 this.form =this.d.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]],
 })
}
}