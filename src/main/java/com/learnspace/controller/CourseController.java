package com.learnspace.controller;

import com.learnspace.model.Course;
import com.learnspace.repository.CourseRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:5173")
public class CourseController {
    private final CourseRepository courses;
    public CourseController(CourseRepository courses){this.courses=courses;}

    @GetMapping public List<Course> all(){return courses.findAll();}
    @GetMapping("/{id}") public ResponseEntity<Course> one(@PathVariable Long id){
        return courses.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}
