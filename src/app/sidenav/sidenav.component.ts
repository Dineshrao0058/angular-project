import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  public sresult:any ="abcxyz";
  public myText ="textcolor";
  public myText0 ="text0";
  public myColor ={color:"lightyellow",backgroundColor:"lightpink"}
  public myColor0 ="side";

  public myName ="text"
  public required =true
  public ipolation="code.com";
  public require = true
  eBinding?:any;

  constructor(){
  }

  ngOnInit(): void{}
  mySidenav(e : any){
    console.log(e.target.value)
    this.eBinding = e.target.value;
  }

}
