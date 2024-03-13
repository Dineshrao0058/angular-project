import { Component } from '@angular/core';

@Component({
  selector: 'app-datapassing',
  templateUrl: './datapassing.component.html',
  styleUrls: ['./datapassing.component.css']
})
export class DatapassingComponent {
  public parentValue:any;
  constructor(){}

  ngonIt():void{}
  onText(e:any){
    this.parentValue=e;
  }

}
