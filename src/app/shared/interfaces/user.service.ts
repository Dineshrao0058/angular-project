import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class UserService {
    usersData: { userName: string; pwd: string}[] =[
        { userName:'dinesh rao', pwd: '121121'},
        { userName:'admin', pwd: 'admin121'}, ];
        
        isLoggedIn = new BehaviorSubject<boolean>(false);

     constructor(
      private router: Router,
      private http:HttpClient
      )  {

  }
  isUserLoggedIn(): boolean{
    let b=false
    this.isLoggedIn.subscribe((res:boolean)=> {
        console.log('isUserLoggedIn() - subscribe', res);
        b=res;
    })

    return b;
    let a =localStorage.getItem('userLogin');
  }
addUser(data:any){
  return this.http.post('https://localhost:3000',data)
}
}
