package com.example.studentservice.controller;

import com.example.studentservice.model.Grade;
import com.example.studentservice.model.Student;
import com.example.studentservice.repository.repository.StudentRepository;
import com.example.studentservice.utill.GradeCalculator;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/students")
@Tag(name = "Student Management", description = "Operations related to Student CRUD")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    @Operation(summary = "Get all students", description = "Fetch a list of all students")
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @PostMapping
    @Operation(summary = "Create a student", description = "Adds a new student to the database")
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Grade grade = GradeCalculator.calculateGrade(student.getScore());
        student.setGrade(grade);
        return ResponseEntity.ok(studentRepository.save(student));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get student by ID", description = "Fetch a student based on their ID")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {
        Optional<Student> student = studentRepository.findById(id);
        return student.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update student details", description = "Modify student details using their ID")
    public ResponseEntity<Student> updateStudent(@RequestBody Student studentDetails, @PathVariable int id) {
        Optional<Student> student = studentRepository.findById(id);
        if(student.isPresent()){
            Student updateStudent = student.get();
            updateStudent.setName(studentDetails.getName());
            updateStudent.setScore(studentDetails.getScore());
            updateStudent.setGrade(GradeCalculator.calculateGrade(studentDetails.getScore()));
            return ResponseEntity.ok(studentRepository.save(updateStudent));
        }else {
            return  ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a student", description = "Remove a student from the database")
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
        if(studentRepository.existsById(id)){
            studentRepository.deleteById(id);
            return ResponseEntity.ok().build() ;
        }else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/grouped-by-grade")
    @Operation(summary = "Group students by grade", description = "Fetch students grouped by their grade")
    public Map<Grade, List<Student>> groupByGrade(){
        List<Student> students = studentRepository.findAll();
        return students.stream()
                .collect(Collectors.groupingBy(Student::getGrade));
    }

    @GetMapping("/grades")
    @Operation(summary = "Get students by grade", description = "Retrieve students belonging to a specific grade")
    public Map<Grade, List<Student>>  getStudentsByGrade(@RequestParam Grade grade){
        List<Student> students = studentRepository.findAll();
        return students.stream()
                .filter(student -> student.getGrade().equals(grade))
                .collect(Collectors.groupingBy(Student::getGrade));
    }
}
