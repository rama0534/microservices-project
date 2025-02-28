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
import { StudentsComponent } from './students/students.component';
import { GroupByGradeComponent } from './group-by-grade/group-by-grade.component'; 
import { CodingEditorComponent } from './coding-editor/coding-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
 


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent, 
    HomeComponent,   
    SaveUpdateModalComponent, DeleteModalComponent, NavBarComponent, FaqComponent, StudyMaterialsComponent, StudentsComponent, GroupByGradeComponent, CodingEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot() 
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
