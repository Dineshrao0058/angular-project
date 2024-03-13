import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any = {
    username:'',
    email:'',
    password:'',
  };

  loginObj: any = {
    userName:'',
    password:'',
  };


  constructor() {  }

 ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
 } 

 onSignup() {
  this.signupUsers.push(this.signupObj);
  this.signupObj = {
      username:'',
      email:'',
      password:''
  };
 }
 onLogin(){
  const isuserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
  if(isuserExist != undefined) {
    alert('User Login Successfully');
  } else {
    alert('Wrong credentials');
  }
 }
}
