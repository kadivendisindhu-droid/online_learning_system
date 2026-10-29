package com.learnspace.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "enrollments", uniqueConstraints = @UniqueConstraint(columnNames = {"user_id", "course_id"}))
public class Enrollment {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="user_id", nullable=false) private Long userId;
    @Column(name="course_id", nullable=false) private Long courseId;
    private Integer progress = 0;
    private LocalDateTime enrolledAt = LocalDateTime.now();

    public Enrollment() {}
    public Enrollment(Long userId, Long courseId){this.userId=userId;this.courseId=courseId;}
    public Long getId(){return id;} public void setId(Long id){this.id=id;}
    public Long getUserId(){return userId;} public void setUserId(Long v){userId=v;}
    public Long getCourseId(){return courseId;} public void setCourseId(Long v){courseId=v;}
    public Integer getProgress(){return progress;} public void setProgress(Integer v){progress=v;}
    public LocalDateTime getEnrolledAt(){return enrolledAt;} public void setEnrolledAt(LocalDateTime v){enrolledAt=v;}
}
