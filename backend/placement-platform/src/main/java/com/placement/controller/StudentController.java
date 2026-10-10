
package com.placement.controller;

import com.placement.dto.LoginRequest;
import com.placement.dto.RegisterRequest;
import com.placement.entity.Student;
import com.placement.repository.StudentRepository;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class StudentController {

    private final StudentRepository studentRepository;
    private final PasswordEncoder passwordEncoder;

    public StudentController(
            StudentRepository studentRepository,
            PasswordEncoder passwordEncoder) {
        this.studentRepository = studentRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @Valid @RequestBody RegisterRequest request) {

        String email = request.getEmail().trim().toLowerCase();

        if (studentRepository.existsByEmail(email)) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Map.of(
                            "message",
                            "Email is already registered"));
        }

        Student student = new Student();
        student.setName(request.getName().trim());
        student.setEmail(email);
        student.setPassword(
                passwordEncoder.encode(request.getPassword()));

        Student savedStudent = studentRepository.save(student);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of(
                        "message", "Student registered successfully",
                        "id", savedStudent.getId(),
                        "name", savedStudent.getName(),
                        "email", savedStudent.getEmail()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @Valid @RequestBody LoginRequest request) {

        String email = request.getEmail().trim().toLowerCase();

        var studentOptional =
                studentRepository.findByEmail(email);

        if (studentOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of(
                            "message", "Invalid email or password"));
        }

        Student student = studentOptional.get();

        boolean passwordMatches = passwordEncoder.matches(
                request.getPassword(),
                student.getPassword());

        if (!passwordMatches) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of(
                            "message", "Invalid email or password"));
        }

        return ResponseEntity.ok(Map.of(
                "message", "Login successful",
                "id", student.getId(),
                "name", student.getName(),
                "email", student.getEmail()));
    }
}
