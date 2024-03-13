import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  logIn!: FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.logIn =this.fb.group({
uname:['',[Validators.required,Validators.email]],
password:['',[Validators.required]]


    })
  }
  


}
