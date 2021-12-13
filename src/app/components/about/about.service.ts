import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http:HttpClient) { }

  getTeams(){
    return this.http.get('https://backend-pridac.herokuapp.com/api/teams');
  }
}
