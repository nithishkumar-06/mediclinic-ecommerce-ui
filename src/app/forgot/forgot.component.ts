import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  nam : string = '';
  newpas : string = '';
  cnewpas : string = '';
  ic : boolean = false;
  cred : Array<any> = [];
  validUser : Array<any> = [];
  datt : string ='';
  constructor(private appi : ApiService, private http : HttpClient,private router : Router){}
  
  regform = new FormGroup({
    un : new FormControl('', [Validators.required,Validators.minLength(5)]),
    unp : new FormControl ('', [Validators.required,Validators.pattern('((?=.*[a-z])(?=.*[A-Z]).{4,8})')]),
    ucnp : new FormControl ('', Validators.required),
  });
  
  
  sub(){
    this.appi.gett().subscribe(data => {
      this.cred = data;
      this.validUser = Object.values(this.cred).filter(cred => cred.username == this.nam);
    
      if(this.validUser.length>0){
      if(this.newpas == this.cnewpas){
        this.validUser[0].password = this.newpas
        console.log(this.validUser[0])
        this.appi.mod(this.validUser[0]).subscribe((result : any)=>{
          alert("Your Password Changed Successfully :)")
        });
        this.router.navigateByUrl('/login')
        

      }else{
        this.datt = "*password mismatch"
        

      }
    } else{
      this.datt = "*no user found"
      
      
    }
    console.warn(this.validUser.length)
  });
}

get fn(){
  return this.regform.controls;
}

mis(){

}
clrdiv(){
  this.nam = '';
  this.newpas = '';
  this.cnewpas = '';
  this.datt = '';
}


}
