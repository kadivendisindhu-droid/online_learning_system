package com.learnspace.controller;

import com.learnspace.model.Learner;
import com.learnspace.repository.LearnerRepository;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {
    private final LearnerRepository learners;
    public AuthController(LearnerRepository learners){this.learners=learners;}

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Learner input){
        if(input.getName()==null || input.getEmail()==null || input.getPassword()==null)
            return ResponseEntity.badRequest().body(Map.of("message","name, email, and password are required"));
        if(learners.findByEmail(input.getEmail()).isPresent())
            return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("message","Email is already registered"));
        // Educational placeholder: do not store plain-text passwords in a real application.
        Learner saved = new Learner();
        saved.setName(input.getName()); saved.setEmail(input.getEmail()); saved.setPassword(input.getPassword());
        Learner result=learners.save(saved);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("id",result.getId(),"name",result.getName(),"email",result.getEmail()));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String,String> input){
        if(input.get("email")==null || input.get("password")==null)
            return ResponseEntity.badRequest().body(Map.of("message","email and password are required"));
        return learners.findByEmail(input.get("email"))
            .filter(u -> u.getPassword().equals(input.get("password")))
            .<ResponseEntity<?>>map(u -> ResponseEntity.ok(Map.of("id",u.getId(),"name",u.getName(),"email",u.getEmail())))
            .orElseGet(() -> ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of("message","Invalid email or password")));
    }
}
