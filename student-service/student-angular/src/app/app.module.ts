import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component'; 
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'; 
import { SaveUpdateModalComponent } from './modals/save-update-modal/save-update-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FaqComponent } from './faq/faq.component';
import { StudyMaterialsComponent } from './study-materials/study-materials.component';
 


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent, 
    HomeComponent,   
    SaveUpdateModalComponent, DeleteModalComponent, NavBarComponent, FaqComponent, StudyMaterialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule,
    ReactiveFormsModule 
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
