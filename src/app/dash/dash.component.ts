import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{
  constructor(private router : Router,private http : HttpClient, private appi : ApiService) {  }
  loginname:string="";
  locc : string = "";
  numm : string ="";
  roll : string = "";
  initial : string = "";
  dd : Date | undefined ;
  subscription: Subscription | undefined;

  patients : any;
  ddob : string = "";
  fnam : string = "";
  lnam : string = "";
  phn : string = "";

  name : string = "";
  dob : string = "";
  lname : string = "";
  Phone : string = "";
  isLogged : boolean = true;
  val : any;
  cuser : Array<any> = [];

  patientsData : Array<any>= [];
  patient : Array<any> = [];

  showP : boolean = true;
  ssh : boolean = false;
  tnp : number = 0;

  pname : string = '';
  plname : string = '';
  pdob : string = '';
  paddress : string = '';
  pphone : string = '';
  pproduct : string = '';
  pprice : string = '';
  data : any;
  sf : boolean = false;
  dnf : boolean = false;
  resp : Array<any> = [];
  serc : Array<any> = [];
  ele : Array<any> = [];
  
  ser(){
    this.name = this.fnam;
    this.lname = this.lnam;
    this.Phone = this.phn;
    this.dob = this.ddob;
    this.patient=this.patientsData;
    // this.serc = [this.name,this.lname,this.Phone,this.dob]
    // for(let x = 0; x<this.serc.length; x++){
    //   if(this.serc[x].length>0){
    //     this.ele.push(this.serc[x])
    //     console.log(this.serc[x])
    //   }
    // }
    if(this.name){
      this.patient = this.patient.filter(pd =>pd.name.toLocaleLowerCase() == this.name.toLocaleLowerCase());
    }

    if(this.lname){
      this.patient = this.patient.filter(pd =>pd.lname.toLocaleLowerCase() == this.lname.toLocaleLowerCase());
    }

    if(this.Phone){
      this.patient = this.patient.filter(pd =>pd.Phone == this.Phone);
    }

    if(this.dob){
      this.patient = this.patient.filter(pd =>pd.dob == this.dob);
    }

    console.log("ng : ",this.dob)
    console.log("json : ",this.patient[0].dob)
    

      
    console.log(this.patient)
    if(this.patient){
      this.ssh = true;
      this.showP = false;
    }else{
      this.sf = false;
      this.dnf = true;
    }
    
    
}
filt(){
  const dat = (<HTMLInputElement>document.getElementById("byp")).value;
  console.log(dat)
  if(dat == "Less than 10"){
  this.patient = this.patientsData.filter(pd =>pd.price<10);
  } else if(dat == "11-30"){
    this.patient = this.patientsData.filter(pd =>pd.price<=30 && pd.price>=11);
  } else if (dat =="31-100"){
    this.patient = this.patientsData.filter(pd =>pd.price<=100 && pd.price>=31);
  } else if (dat =="101-200"){
    this.patient = this.patientsData.filter(pd =>pd.price<=200 && pd.price>=101);
  }

  this.showP=false;
  this.ssh=true;
}

clr(){
  this.ssh = false;
  this.showP = true;
  this.fnam = '';
  this.lnam = '';
  this.phn = '';
  this.ddob = '';
}
  lgo(){
    localStorage.removeItem('userData');
    // this.appi.flag = false;
    this.router.navigateByUrl('/login');
    localStorage.removeItem('tk');
    this.appi.dlt().subscribe((result : any)=>{
    });

    
  }
  sff(){
    if(this.sf==false){
    this.sf = true;
    } else {
      this.sf = false;
    }
  }

   ngOnInit() {
    const storedData = localStorage.getItem('userData');
    if(storedData){
      this.data = JSON.parse(storedData)
    };
    // console.warn(this.data)
    // console.warn(this.data[0].username)
    this.appi.getPatients().subscribe(data =>{
      this.patientsData = data;
      this.tnp = data.length;
      
    })
    this.appi.getCurrentUser().subscribe(data=>{
      this.cuser = data;
      console.warn("cuser : ",this.cuser)
      console.log("valid" , this.data)
      this.loginname=this.cuser[0].firstName +" " + this.cuser[0].lastName;
    this.locc=this.cuser[0].location;
    this.numm=this.cuser[0].number;
    this.roll = this.cuser[0].role;
    this.initial = this.cuser[0].firstName[0]+ " " + this.cuser[0].lastName[0].toLocaleUpperCase();

    })
    
    this.subscription = interval(1000).subscribe(() => {
      this.dd = new Date();
    })
    
}
}
