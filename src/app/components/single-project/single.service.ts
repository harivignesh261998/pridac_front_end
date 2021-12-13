import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingleService {
details;
  constructor() { }

  giveDetails(details){
    localStorage.setItem('Summa',JSON.stringify(details));   
  }

  getDetails(){
    return JSON.parse(localStorage.getItem("Summa"));
   
  }
}
