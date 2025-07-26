import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  
  namm : string = '';
  pass : string = '';
  fnam : string = '';
  lnam : string = '';
  ema : string = '';
  num : string ='';
  loc : string = '';
  role : string ='';

  ud : any ={};
  cred : Array<any>= [];
  validUser : Array<any> = [];

  ur : string = '';
  
  regform = new FormGroup(  {
    un : new FormControl('', Validators.required),
    ps : new FormControl ('', Validators.required),
    fn : new FormControl ('', Validators.required),
    ln : new FormControl ('', Validators.required),
    em : new FormControl ('', Validators.required),
    nm : new FormControl ('', Validators.required),
    lc : new FormControl ('', Validators.required),
    rl : new FormControl ('', Validators.required)
  });
  

  get fn(){
    return this.regform.controls;
  }




  constructor(private router : Router,private appi : ApiService, private http : HttpClient) { }

  reg(){
    if(this.regform.valid){
    this.appi.gett().subscribe(data => {
      this.cred = data;
      this.validUser = Object.values(this.cred).filter(cred => cred.username == this.namm);
      console.log(this.validUser);
    })
    if(this.validUser){
      alert("Username already Exists")
    } else {
    this.ud  = {
      username : this.namm,
      password : this.pass,
      firstName : this.fnam,
      lastName : this.lnam,
      email : this.ema,
      number : this.num,
      location : this.loc,
      role : this.role
      
    }
    this.appi.register(this.ud).subscribe((result: any)=>{
      console.warn(result)
    })
    alert("You Registered Successfully!!")
    this.router.navigateByUrl('/login')
   
    
  }

    
  }
  else{
    this.ur="**Enter all the details**"
  }
}
  
}


