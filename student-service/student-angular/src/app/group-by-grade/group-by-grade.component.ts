import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'group-by-grade',
  templateUrl: './group-by-grade.component.html',
  styleUrls: ['./group-by-grade.component.css']
})
export class GroupByGradeComponent implements OnInit {
  students: Student[] = [];
    selectedStudent: any = {};
    groupedStudents: { [key: string]: Student[] } = {};
    selectedGrade: string = '';
    studentsByGrade: Student[] = [];
  
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
  
    deleteStudent(id: number): void { 
         this.studentService.deleteStudent(id).subscribe({
          next: () => {
            alert('Student deleted successfully');
            this.fetchStudents(); 
          },
          error: (err) => console.error('Error deleting student', err),
        });
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
  
    updateStudent(updatedStudent: any) { 
      this.studentService.updateStudent(updatedStudent.id, updatedStudent).subscribe({
        next: () => {
          alert('Student updated successfully');
          this.fetchStudents();
          this.selectedStudent = {}; 
        },
        error: (err) => console.error('Error updating student', err),
      });
    }
  
    loadGroupedStudents(): void {
      this.studentService.getStudentsGroupedByGrade().subscribe({
        next: (data) => {
          this.groupedStudents = data; 
        },
        error: (err) => {
          console.error('Error fetching grouped students:', err);
        }
      });
    }
  
    loadStudentsByGrade(grade: string): void {
      this.selectedGrade = grade;
      this.studentService.getStudentsByGrade(grade).subscribe({
        next: (data) => {
          this.studentsByGrade = data[grade] || [];
        },
        error: (err) => {
          console.error(`Error fetching students for grade ${grade}:`, err);
        }
      });
    }

}
