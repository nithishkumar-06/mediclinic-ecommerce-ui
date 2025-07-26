import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private server = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }
  sendData(data : any){
    return this.http.post(`${this.server}`,data)
  }
}
