import { Component, OnInit } from '@angular/core'; 
import { StudentService } from '../services/student.service'; 
import { Student } from '../models/student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

   students: Student[] = []; 
   activeTab: string = '';  
   groupedStudents: { [key: string]: Student[] } = {};
   selectedGrade: string = ''; 
 
   constructor(private studentService: StudentService) {}; 
 
   isLoading = false;
   errorMessage = '';
 
 
   ngOnInit(): void {
     this.fetchStudents();
     this.loadGroupedStudents();
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

   loadGroupedStudents(): void {
    this.studentService.getStudentsGroupedByGrade().subscribe({
      next: (data) => {
        this.groupedStudents = data;  
      },
      error: (err) => {
        console.error('Error fetching grouped students:', err);
        this.errorMessage = 'Failed to load students. Please try again later.';
      }
    });
  }
 
   selectTab(tab: string): void {
    this.activeTab = tab; 
    tab == 'Students List' ?  this.fetchStudents() : this.loadGroupedStudents(); 
  }

  reset() {
    this.activeTab = '';
   }

   saveStudent(updatedStudent: any): void { 
       this.studentService.addStudent(updatedStudent).subscribe({
         next: () => {
           alert('Student added successfully'); 
           this.fetchStudents(); 
           this.loadGroupedStudents();
           console.log("this stu", this.students)
         },
         error: (err) => {
          console.error('Error adding student', err),
          this.errorMessage = err;
         } 
       });
       console.log("activetan", this.activeTab);
   } 
 
}
