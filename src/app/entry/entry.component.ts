import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent{
  
  constructor(private router : Router,private http : HttpClient, private appi : ApiService) {  }
  dataentryform=new FormGroup({
    fnam:new FormControl('',Validators.required),
    lnam:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    address:new FormControl('',Validators.required),
    fnampre:new FormControl('',Validators.required),
    lnampre:new FormControl('',Validators.required),
    datepre:new FormControl('',Validators.required),
    phonepre:new FormControl('',Validators.required),
    addresspre:new FormControl('',Validators.required),
    prodnam:new FormControl('',Validators.required),
    dosenum:new FormControl('',Validators.required),
    count:new FormControl('',Validators.required),
    direct:new FormControl('',Validators.required),


  });
  loginname:string="";
  locc : string = "";
  numm : string ="";
  roll : string = "";
  initial : string = "";
  dd : Date | undefined ;
  subscription: Subscription | undefined;
  cuser : Array<any> = [];
  data : any;

  patdob : string = "";
  patfnam : string = "";
  patlnam : string = "";
  patphn : string = "";
  patadd : string ="";

  perdob : string = "";
  perfnam : string = "";
  perlnam : string = "";
  perphn : string = "";
  peradd : string ="";

  proname : string = "";
  dose : string = "";
  coun : string = "";
  dir : string = "";

  deData : any = {};
  patData : any ={};
  presData : any = {};
  prodData : any = {};
  patDataa : any ;

  d1 : boolean = this.appi.dd1;
  d2 : boolean = this.appi.dd2;
  d3 : boolean = this.appi.dd3;

  idd : string = '';
  pats : any;
  
  lgo(){
    localStorage.removeItem('userData');
    this.router.navigateByUrl('/login');
    localStorage.removeItem('tk');
    this.appi.dlt().subscribe((result : any)=>{
    });  
  }

  sub(){
    if(this.dataentryform.valid){
    this.presData = {
      prescriberFirstName : this.perfnam,
      prescriberLastName : this.perlnam,
      prescriberDOB : this.perdob,
      prescriberPhone : this.perphn,
      prescriberAddress : this.peradd

    }

    this.patData = {
      patientFirstName : this.patfnam,
      patientLastName : this.patlnam,
      patientDOB : this.patdob,
      patientPhone : this.patphn,
      patientAddress : this.patadd
    }

    this.prodData ={
      productName : this.proname,
      Dosage : this.dose,
      refillCount : this.coun,
      Direction : this.dir
    }

    this.deData = {
      name : this.patfnam,
      patientDetails : this.patData,
      prescriberDetails : this.presData,
      productDetails : this.prodData
    }
    this.appi.currentPatientData =this.deData;
    this.appi.postPatientData(this.deData).subscribe((result : any)=>{
      this.router.navigateByUrl('/patient')
    })
    localStorage.setItem('entry',"abc");
  } 
   else{
    alert("Enter all the Credentials")
  }
  }

}
