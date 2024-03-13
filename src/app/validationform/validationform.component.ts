import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validationform',
  templateUrl: './validationform.component.html',
  styleUrls: ['./validationform.component.css']
})
export class ValidationformComponent implements OnInit {

  form!: FormGroup;

  constructor(private d:FormBuilder){
    

  }
  ngOnInit(): void {
    this.form =this.d.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      mobile:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      acceptTerms:['',[Validators.required]],
      Address:['',[Validators.required]],
      Street:['',[Validators.required]],
      City:['',[Validators.required]],
      State:['',[Validators.required]],
      Zip:['',[Validators.required]],
      
    })
  }
  onSubmit(){
    console.log(this.form.value)

  }
 reset(){
  this.form.reset()
 }


}
