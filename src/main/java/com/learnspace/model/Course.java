package com.learnspace.model;

import jakarta.persistence.*;

@Entity
@Table(name = "courses")
public class Course {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String category;
    private String level;
    private String duration;
    private Integer lessons;
    private Double rating;
    private String description;
    private Double price;

    public Course() {}
    public Course(String title, String category, String level, String duration, Integer lessons,
                  Double rating, String description, Double price) {
        this.title=title; this.category=category; this.level=level; this.duration=duration;
        this.lessons=lessons; this.rating=rating; this.description=description; this.price=price;
    }
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public String getTitle(){return title;} public void setTitle(String v){title=v;}
    public String getCategory(){return category;} public void setCategory(String v){category=v;}
    public String getLevel(){return level;} public void setLevel(String v){level=v;}
    public String getDuration(){return duration;} public void setDuration(String v){duration=v;}
    public Integer getLessons(){return lessons;} public void setLessons(Integer v){lessons=v;}
    public Double getRating(){return rating;} public void setRating(Double v){rating=v;}
    public String getDescription(){return description;} public void setDescription(String v){description=v;}
    public Double getPrice(){return price;} public void setPrice(Double v){price=v;}
}
