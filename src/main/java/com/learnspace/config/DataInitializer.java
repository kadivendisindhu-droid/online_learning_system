package com.learnspace.config;

import com.learnspace.model.Course;
import com.learnspace.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean CommandLineRunner seedCourses(CourseRepository repo) {
        return args -> {
            if (repo.count() == 0) {
                repo.save(new Course("React for Modern Web Apps","Development","Beginner","6h 20m",24,4.9,"Build reusable components, manage state, and create responsive interfaces with React.",0.0));
                repo.save(new Course("UI/UX Design Fundamentals","Design","Beginner","4h 45m",18,4.8,"Learn visual hierarchy, wireframing, prototyping, and practical design thinking.",19.0));
                repo.save(new Course("Python & Data Science","Data Science","Intermediate","8h 10m",32,4.9,"Explore Python, data analysis, visualization, and your first machine learning models.",29.0));
                repo.save(new Course("Digital Marketing Essentials","Business","Beginner","3h 50m",16,4.7,"Understand content strategy, social media, SEO, and campaign measurement.",15.0));
                repo.save(new Course("Java & Spring Boot APIs","Development","Intermediate","7h 05m",28,4.8,"Create REST APIs and connect Java applications to relational databases.",25.0));
                repo.save(new Course("Productivity with AI Tools","Business","Beginner","2h 40m",12,4.6,"Use modern AI tools to plan, research, write, and organize your work.",0.0));
            }
        };
    }
}
