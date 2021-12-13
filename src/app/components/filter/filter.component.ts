import { stringify } from '@angular/compiler/src/util';
import {Component, OnInit} from '@angular/core';
import { ProjectService } from '../project-collections/project.service';
import { FilterService } from './filter.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

 
  constructor(private projects:ProjectService,private filter:FilterService) { }
project;
keyword = 'name';
 data =[]

 ngOnInit(){
   this.projects.getProjects().subscribe(res=>{
     this.project=res['result'];
     for(let i=0;i<this.project.length;i++){
      const result = this.data.find( ({ name }) => name === this.project[i].category);
      if(result ===undefined){
        this.data.push({name:this.project[i].category})
      }
     }
     this.data.unshift({name:'All Categories'})
   })

 }

 

 selectEvent(item) {
   this.filter.giveDetails(item.name);
  //  console.log(item)

}

onChangeSearch(val: string) {
  console.log(val);
 
}

onFocused(e){
  console.log(e)
  
}
}
