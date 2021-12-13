import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'single-Project',component:SingleProjectComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'contactus',component:ContactComponent},
  {path:'fliter',component:FilterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
