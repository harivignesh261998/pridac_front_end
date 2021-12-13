import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { ProjectsComponent } from './components/projects/projects.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FilterComponent } from './components/filter/filter.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ProjectCollectionsComponent } from './components/project-collections/project-collections.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    SingleProjectComponent,
    AboutComponent,
    ContactComponent,
    FilterComponent,
    ProjectCollectionsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    HttpClientModule,
    AutocompleteLibModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
