import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Grade, Student } from '../models/student.model';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = environment.API_URL;
  private students = new BehaviorSubject<Student[]>([]);
  students$ = this.students.asObservable();

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`);
  }

  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addStudent(student: Student): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, student);
  }

  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getGroupedByGrade(): Observable<Map<Grade, Student[]>> {
    return this.http.get<Map<Grade, Student[]>>(`${this.apiUrl}/grouped-by-grade`);
  }
 
  
  // Get students grouped by grade
  getStudentsGroupedByGrade(): Observable<{ [key: string]: Student[] }> {
    return this.http.get<{ [key: string]: Student[] }>(`${this.apiUrl}/grouped-by-grade`);
  }

  // Get students by a specific grade
  getStudentsByGrade(grade: string): Observable<{ [key: string]: Student[] }> {
    const params = new HttpParams().set('grade', grade);
    return this.http.get<{ [key: string]: Student[] }>(`${this.apiUrl}/grades`, { params });
  }
}
