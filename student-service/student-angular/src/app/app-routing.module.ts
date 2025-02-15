import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { StudyMaterialsComponent } from './study-materials/study-materials.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'students', component: StudentsComponent}, 
  { path: 'materials', component: StudyMaterialsComponent},
  { path: 'faq', component: FaqComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
