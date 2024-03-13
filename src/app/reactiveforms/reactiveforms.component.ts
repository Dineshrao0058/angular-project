import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

// uname = new FormControl();

loginform = new FormGroup({
 fname: new FormControl('vita',[Validators.required,Validators.minLength(10)]),
 lname: new FormControl('technologies',[Validators.required,Validators.maxLength(9)]),
 mobile: new FormControl(),
 gender: new FormControl(),
 email: new FormControl(),
 psw: new FormControl(),
 cpsw: new FormControl(),

});

constructor(){ }
  ngOnInit(): void {
    
  }
submit(){
  console.log(this.loginform)
}
}


