import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient, private router : Router) {}

  currentPatientData : any;
  flag : boolean = false;
  
  dd1 : boolean = false;
  dd2 : boolean = false;
  dd3 : boolean = false;

  register(data : any){
    return this.http.post('http://localhost:3000/users', data)
    
  }

  mod(data : any){
    return this.http.put('http://localhost:3000/users/' + data.id, data)
    
  }
  dlt(){
    return this.http.delete('http://localhost:3000/cu/1')
    
  }


  gett() : Observable<any>{
    return this.http.get('http://localhost:3000/users')
    
  }

  getPatients() : Observable <any>{
    return this.http.get('http://localhost:3000/patients')
  }

  currentUser(data : any){
    return this.http.post('http://localhost:3000/cu', data)
  } 
  
  getCurrentUser() : Observable <any>{
    return this.http.get('http://localhost:3000/cu')
  }

  postPatientData(data : any){
    return this.http.post('http://localhost:3000/patientData',data)
  }

  getP() :Observable <any>{
    return this.http.get('http://localhost:3000/patientData')
  }

  putPatient(data : any, idd : string){
    return this.http.put('http://localhost:3000/patientData/' + idd, data)
    
  }

  patchData(data : any , idd : string){
    return this.http.patch('http://localhost:3000/patientData/' + idd, data)
  }
  
}
