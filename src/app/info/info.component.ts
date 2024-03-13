import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  employee:any[]=[{Employeeid:'2245t',EmployeeName:'Vijay',Emprole:'Android',Mobile:'9100490804'},
  {Employeeid:'2243t',EmployeeName:'Anusha',Emprole:'Hr',Mobile:'9912646521'},
  {Employeeid:'2225t',EmployeeName:'Srikanth',Emprole:'Sr.developer',Mobile:'9209675601'},
 {Employeeid:'2335t',EmployeeName:'Santosh',Emprole:'Sr.developer',Mobile:'9325609574'},
  {Employeeid:'4345t',EmployeeName:'Shiva',Emprole:'Jr.developer',Mobile:'8005468218'},
  {Employeeid:'2675t',EmployeeName:'Sudhakar',Emprole:'Jr.developer',Mobile:'7389458816'}];
}
