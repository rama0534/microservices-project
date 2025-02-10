package com.example.studentservice.controller;

import com.example.studentservice.model.Grade;
import com.example.studentservice.model.Student;
import com.example.studentservice.repository.repository.StudentRepository;
import com.example.studentservice.utill.GradeCalculator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Student> createStudent(@RequestBody Student student) {
        Grade grade = GradeCalculator.calculateGrade(student.getScore());
        student.setGrade(grade);
        return ResponseEntity.ok(studentRepository.save(student));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> getStudent(@PathVariable int id) {
        Optional<Student> student = studentRepository.findById(id);
        return student.map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
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
    public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
        if(studentRepository.existsById(id)){
            studentRepository.deleteById(id);
            return ResponseEntity.ok().build() ;
        }else {
            return ResponseEntity.notFound().build();
        }

    }

    @GetMapping("/grouped-by-grade")
    public Map<Grade, List<Student>> groupByGrade(){
        List<Student> students = studentRepository.findAll();
        return students.stream()
                .collect(Collectors.groupingBy(Student::getGrade));
    }

    @GetMapping("/grades")
    public Map<Grade, List<Student>>  getStudentsByGrade(@RequestParam Grade grade){
        List<Student> students = studentRepository.findAll();
        return students.stream()
                .filter(student -> student.getGrade().equals(grade))
                .collect(Collectors.groupingBy(Student::getGrade));
    }
}
