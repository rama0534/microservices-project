import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component'; 
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { StudyMaterialsComponent } from './study-materials/study-materials.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'students', component: StudentListComponent}, 
  { path: 'materials', component: StudyMaterialsComponent},
  { path: 'faq', component: FaqComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
