import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-patientsetails',
  templateUrl: './patientsetails.component.html',
  styleUrls: ['./patientsetails.component.css']
})
export class PatientsetailsComponent {
  constructor(private appi : ApiService){}
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
  patts : any;
  patData : any;
  iid : string = '';

  epatdob : string = "";
  epatfnam : string = "";
  epatlnam : string = "";
  epatphn : string = "";
  epatadd : string ="";

  eperdob : string = "";
  eperfnam : string = "";
  eperlnam : string = "";
  eperphn : string = "";
  eperadd : string ="";

  eproname : string = "";
  edose : string = "";
  ecoun : string = "";
  edir : string = "";

  pop1 : boolean = false;
  pop2 : boolean = false;
  pop3 : boolean = false;

  patd : any = '';

  cancel(){
    this.pop1 = false;
    this.pop2 = false;
    this.pop3 = false;
  }

  sub1(){
    this.patd = {
      patientDetails : {
      patientFirstName : this.epatfnam,
      patientLastName : this.epatlnam,
      patientDOB : this.epatdob,
      patientPhone : this.epatphn,
      patientAddress : this.epatadd
    }
  }
    this.appi.patchData(this.patd,this.iid).subscribe((result : any)=>{
    });
    this.pop1 = false;
    this.ngOnInit()
  }

  sub2(){
    this.patd = {
      prescriberDetails : {
        prescriberFirstName : this.eperfnam,
        prescriberLastName : this.eperlnam,
        prescriberDOB : this.eperdob,
        prescriberPhone : this.eperphn,
        prescriberAddress : this.eperadd
    }
  }
    this.appi.patchData(this.patd,this.iid).subscribe((result : any)=>{
    });
    this.pop2 = false;
    this.ngOnInit()

  }

  sub3(){
    this.patd = {
      productDetails : {
        productName : this.eproname,
        Dosage : this.edose,
        refillCount : this.ecoun,
        Direction : this.edir
      }
  }
    this.appi.patchData(this.patd,this.iid).subscribe((result : any)=>{
    });
    this.pop3 = false;
    this.ngOnInit()
  }

  e1(){
    this.pop1 = true
  }

  e2(){
    this.pop2 = true;
  }

  e3(){
    this.pop3 = true
  }

  ngOnInit(){
    this.appi.getP().subscribe(data=>{
      this.patts = data
      this.patData = this.patts[this.patts.length-1];
      this.iid = this.patData.id
      this.patfnam = this.patData.patientDetails.patientFirstName
      this.patlnam = this.patData.patientDetails.patientLastName
      this.patphn = this.patData.patientDetails.patientPhone
      this.patdob = this.patData.patientDetails.patientDOB
      this.patadd = this.patData.patientDetails.patientAddress

      this.perfnam = this.patData.prescriberDetails.prescriberFirstName
      this.perlnam = this.patData.prescriberDetails.prescriberLastName
      this.perdob = this.patData.prescriberDetails.prescriberDOB
      this.perphn = this.patData.prescriberDetails.prescriberPhone
      this.peradd = this.patData.prescriberDetails.prescriberAddress

      this.proname = this.patData.productDetails.productName
      this.dose = this.patData.productDetails.Dosage
      this.coun = this.patData.productDetails.refillCount
      this.dir = this.patData.productDetails.Direction
    
      this.epatfnam = this.patData.patientDetails.patientFirstName
      this.epatlnam = this.patData.patientDetails.patientLastName
      this.epatphn = this.patData.patientDetails.patientPhone
      this.epatdob = this.patData.patientDetails.patientDOB
      this.epatadd = this.patData.patientDetails.patientAddress

      this.eperfnam = this.patData.prescriberDetails.prescriberFirstName
      this.eperlnam = this.patData.prescriberDetails.prescriberLastName
      this.eperdob = this.patData.prescriberDetails.prescriberDOB
      this.eperphn = this.patData.prescriberDetails.prescriberPhone
      this.eperadd = this.patData.prescriberDetails.prescriberAddress

      this.eproname = this.patData.productDetails.productName
      this.edose = this.patData.productDetails.Dosage
      this.ecoun = this.patData.productDetails.refillCount
      this.edir = this.patData.productDetails.Direction
    });
  }

}
