import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router : Router, private http : HttpClient,private appi : ApiService) {}
  nam : string = "" ;
  pas : string = "";
  a : string = 'n' ;
  ic : boolean = false;
  cred : Array<any>= [];
  validUser : Array<any> = [];
  users : any;
  index : number = 0;
  datt : Array<any> = [];
  ngOnInit(){
    // this.http.get("assets/userdata.json").subscribe(data => {
    //   this.users = data;
    // })
    // this.appi.logout();
    localStorage.removeItem('tk')
    localStorage.removeItem('entry')
    this.appi.getCurrentUser().subscribe(data=>{
      this.datt = data
      if(this.datt.length>0){
        this.appi.dlt().subscribe((result : any)=>{
        });
      }
    });
    

  }


  logform = new FormGroup({})
  userData : any;
  

  sub(){  
    this.appi.gett().subscribe(data => {
      this.cred = data;
      this.validUser = Object.values(this.cred).filter(cred => cred.username == this.nam && cred.password == this.pas);
      if(this.validUser.length == 1){
      console.log(this.validUser)
    this.router.navigateByUrl('/dash');
    localStorage.setItem('tk',"abc");
    this.appi.currentUser(this.validUser[0]).subscribe((result: any)=>{
      console.warn(result)
    })
  }
    else{
      this.ic = true;
    }    
  });
  

}
}


// for(let x = 0; x<this.users.users.length;x++){
//   if(this.nam == this.users.users[x].username && this.pas == this.users.users[x].password){
//     this.a = 'y';
//     this.obj.fnam=this.users.users[x].firstName;
//     this.obj.lnam = this.users.users[x].lastName;
//     this.obj.rol = this.users.users[x].role;
//     this.obj.ema = this.users.users[x].email;
//     this.obj.num = this.users.users[x].number;
//     this.obj.loc = this.users.users[x].location;
//     this.obj.initial = this.users.users[x].firstName[0] + " " + this.users.users[x].lastName[0];
//   }
// }
// if(this.a == 'y'){
//   this.router.navigateByUrl('/dashboard');
// }
// else{
//   this.ic = true;
// }



