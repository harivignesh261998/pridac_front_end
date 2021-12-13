import { Component, OnInit } from '@angular/core';
import {AboutService} from './about.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
profile_pic_;
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.aboutService.getTeams().subscribe(res=>{
      res['result'].forEach(el => {
        if(el.home){
          this.profile_pic_=el
        }
        
      });

      console.log(this.profile_pic_)
    
    })

  }

}
