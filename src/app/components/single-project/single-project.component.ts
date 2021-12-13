import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleService } from './single.service';


@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit  {
  

  constructor(private single:SingleService,private route:ActivatedRoute) { }
  details;
  id;
  selectedProject;
  imgSrc;
  mon=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  date;
  month;

  ngOnInit(): void {
    this.route.queryParams.subscribe(res=>{
      this.id=res.id;
      this.details=this.single.getDetails();
      // console.log(this.details.images[0])
      
    })

    this.details.forEach(el=> {
      if(el._id===this.id){
        this.selectedProject=el;
        this.imgSrc=this.selectedProject.images[0]
      }
      
    });
this.changeImage(0);
    console.log(this.selectedProject)
    let date = new Date(this.selectedProject.construction_date)
    this.date=date.getFullYear();
    this.month=this.mon[date.getMonth()-1];
    

    
  }

  changeImage(id){
    this.imgSrc=this.selectedProject.images[id]
    console.log(id)
    let thumbnails = document.getElementsByClassName('thumbnail');
    let activeImage = document.getElementsByClassName('active');
    let im=document.getElementById('featured');
    for(var i=0;i<thumbnails.length;i++){
      thumbnails[i].addEventListener('mouseover',function(){
        if(activeImage.length>0){
          activeImage[0].classList.remove('active')
        }
        this.classList.add('active');
      })
    }
  }

}
