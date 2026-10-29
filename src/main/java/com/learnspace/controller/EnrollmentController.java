package com.learnspace.controller;

import com.learnspace.model.Enrollment;
import com.learnspace.repository.EnrollmentRepository;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/enrollments")
@CrossOrigin(origins = "http://localhost:5173")
public class EnrollmentController {
    private final EnrollmentRepository enrollments;
    public EnrollmentController(EnrollmentRepository enrollments){this.enrollments=enrollments;}

    @PostMapping public ResponseEntity<?> enroll(@RequestBody Enrollment request){
        if(request.getUserId()==null || request.getCourseId()==null)
            return ResponseEntity.badRequest().body(Map.of("message","userId and courseId are required"));
        return enrollments.findByUserIdAndCourseId(request.getUserId(), request.getCourseId())
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(HttpStatus.CREATED).body(enrollments.save(new Enrollment(request.getUserId(), request.getCourseId()))));
    }
    @GetMapping public List<Enrollment> byUser(@RequestParam Long userId){return enrollments.findByUserId(userId);}
}
