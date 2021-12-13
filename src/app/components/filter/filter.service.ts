import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
 private subject = new Subject<any>();
  constructor() { }

  giveDetails(name){
    console.log(name);
    this.subject.next(name);
    
    console.log(this.subject.next(name));
    
  }

  getDetails():Observable<any>{
    console.log('hai');
    return this.subject.asObservable();
  }


}
