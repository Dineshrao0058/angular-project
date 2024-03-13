import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  employee:any[]=[{Employeeid:'2245t',EmployeeName:'Vijay',Emprole:'Android',Mobile:'9100490804',Action:'edit'},
  {Employeeid:'2243t',EmployeeName:'Anusha',Emprole:'Hr',Mobile:'9912646521',Action:'edit'},
  {Employeeid:'2225t',EmployeeName:'Srikanth',Emprole:'Sr.developer',Mobile:'9209675601',Action:'edit'},
 {Employeeid:'2335t',EmployeeName:'Santosh',Emprole:'Sr.developer',Mobile:'9325609574',Action:'edit'},
  {Employeeid:'4345t',EmployeeName:'Shiva',Emprole:'Jr.developer',Mobile:'8005468218',Action:'edit'},
  {Employeeid:'2675t',EmployeeName:'Sudhakar',Emprole:'Jr.developer',Mobile:'7389458816',Action:'edit'}];
  constructor(){}
  ngOnInIt():void{}
  search(SearchValue:any){
    console.log(SearchValue,"search Value");
    console.log(this.employee)
    this.employee = this.employee.filter((x=>x.EmployeeName.includes(SearchValue)))
  }
}

