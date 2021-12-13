import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProjectService} from './project.service'
import {SingleService} from '../single-project/single.service';
import {FilterService} from '../filter/filter.service'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-project-collections',
  templateUrl: './project-collections.component.html',
  styleUrls: ['./project-collections.component.css']
})
export class ProjectCollectionsComponent implements OnInit {
  project
  hai:Subscription;
keyword = 'name';
 data =[]
mainArray;
p: number = 1;
    constructor(private projects:ProjectService,private router:Router,private single:SingleService,private filter:FilterService) {
    this.hai =this.filter.getDetails().subscribe(res=>{
       console.log(res);
       this.displayAsCategory(res);
     })
      
     }
  
    ngOnInit(): void {
      this.projects.getProjects().subscribe(res=>{
        console.log('hey heelo vanakam',res)
        this.project=res['result']
        this.mainArray=this.project;
        console.log(this.project[0].name);
        for(let i=0;i<this.project.length;i++){
          const result = this.data.find( ({ name }) => name === this.project[i].category);
          if(result ===undefined){
            this.data.push({name:this.project[i].category})
          }
         }
      })
  
    }
  
    openDetails(id){
      console.log(id);
      this.single.giveDetails(this.project)
      this.router.navigate(['single-Project'],{
        queryParams:{id:id}
      });
      
    }

    displayAsCategory(item){
      if(item==='All Categories'){
        this.project=this.mainArray;
      }
      else{
        this.project=[];
        for(let i=0;i<this.mainArray.length;i++){
          if(item===this.mainArray[i].category){
            this.project.push(this.mainArray[i])
          }
        }        
      }
      console.log(this.project)
    }

    
  
}
