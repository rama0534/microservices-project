import { Component, Input } from '@angular/core';
import { StudentService } from '../services/student.service'; 
import { Student } from '../models/student.model'; 

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  @Input() students: Student[] = []; 
  @Input() errorMessage = '';

  constructor(private studentService: StudentService) {}; 

  isLoading = false;
  


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

  deleteStudent(id: number): void { 
       this.studentService.deleteStudent(id).subscribe({
        next: () => {
          alert('Student deleted successfully');
          this.fetchStudents(); 
        },
        error: (err) => console.error('Error deleting student', err),
      });
  }
 

  updateStudent(updatedStudent: any) { 
    this.studentService.updateStudent(updatedStudent.id, updatedStudent).subscribe({
      next: () => {
        alert('Student updated successfully');
        this.fetchStudents(); 
      },
      error: (err) => console.error('Error updating student', err),
    });
  }

}
