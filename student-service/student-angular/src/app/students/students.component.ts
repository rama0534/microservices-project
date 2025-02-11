import { Component, ChangeDetectorRef, OnInit } from '@angular/core'; 
import { StudentService } from '../services/student.service'; 
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

 students: Student[] = [];
   selectedStudent: any = {};
   activeTab: string = '';  
//    groupedStudents: { [key: string]: Student[] } = {};
//    selectedGrade: string = '';
//    studentsByGrade: Student[] = [];
 
   constructor(private studentService: StudentService) {}; 
 
   isLoading = false;
   errorMessage = '';
 
 
   ngOnInit(): void {
    //  this.fetchStudents();
    //  this.loadGroupedStudents();
   }
 
   fetchStudents(): void {
     this.studentService.getStudents().subscribe({
       next: (data) => {
         this.students = data;
         this.errorMessage = '';
       }, 
       error: (err) => {
         console.error('Error fetching students', err);
         this.errorMessage = 'Failed to load students. Please try again later.';
       },
       complete: () => {
         this.isLoading = false;
       }
     }); 
   }

   selectTab(tab: string): void {
    this.activeTab = tab;
    console.log("this.activeTab", tab)
     
  }

   saveStudent(updatedStudent: any): void { 
       this.studentService.addStudent(updatedStudent).subscribe({
         next: () => {
           alert('Student added successfully');
           this.fetchStudents();
           this.selectedStudent = {};
         },
         error: (err) => console.error('Error adding student', err),
       });
   } 
 
}
