import { outputAst } from '@angular/compiler'
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './child.component.component.html',
  styleUrls: ['./child.component.component.css']
})
export class ChildComponentComponent {
 @Output() childValue = new EventEmitter
  constructor(){}
  ngOnIt() : void{}
  onTest(e : any){
    console.log(e.target.value)
    this.childValue.emit(e.target.value)

  }
  abc(){
    return "it is from child ac method"
  }

}

