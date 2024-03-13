import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent  implements OnInit {

public a1 = true;

mobiles :string[] =['realme','redmi','pixel','blackberry','acer','asus',];

  students:{sname:string; rNo: string; percent: number; class: string; }[]=[
    {sname: 'dinesh', rNo:'21', percent: 50, class: '9th class' },
    {sname: 'vijay',  rNo:'22', percent: 70, class: '9th class' },
    {sname: 'vinay',  rNo: '23', percent: 60, class: '9th class' },
    {sname: 'karthik', rNo:'24', percent: 70, class: '9th class' },
    {sname: 'bharath', rNo:'25', percent: 60, class: '9th class' },
    {sname: 'kusheel', rNo:'26', percent: 70, class: '9th class' },

  ];
  
  constructor() {
  }

  ngOnInit(): void {

  }

}
