import { Component, Input } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'group-by-grade',
  templateUrl: './group-by-grade.component.html',
  styleUrls: ['./group-by-grade.component.css']
})
export class GroupByGradeComponent {
     
    @Input() groupedStudents: { [key: string]: Student[] } = {};
    @Input() data: string | undefined;
    @Input() errorMessage: string = '';
 
    selectedGrade: string = '';
    studentsByGrade: Student[] = [];
  
    constructor(private studentService: StudentService) {}; 
  
    isLoading = false; 
  
  
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
