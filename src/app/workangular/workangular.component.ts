import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-workangular',
  templateUrl: './workangular.component.html',
  styleUrls: ['./workangular.component.css']
})
export class WorkangularComponent implements OnInit {
pBinding: any='VITA TECHNOLOGY';
sInterpolation: any ='output : Hello World....';
result: any ;
eBinding: any;

styleobj:any;

constructor() {
  console.log(this.pBinding);
  this.styleobj ='';
}

ngOnInit(): void {}

myFun(e: any) {
  console.log(e);
  this.eBinding = e.target.value;
}
}


