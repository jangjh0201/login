package com.example.demo.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

/**
 * Business Logic for the application. CoursesHardcodedService exposes a few
 * methods we would invoke from our Rest Resource.
 */
@Service
public class CoursesHardcodedService {
    private static List<Course> courses = new ArrayList<>();
    private static long idCounter = 0;

    static {
        courses.add(new Course(++idCounter, "drtrue", "1번 항목"));
        courses.add(new Course(++idCounter, "drtrue", "2번 항목"));
        courses.add(new Course(++idCounter, "drtrue", "3번 항목"));
        courses.add(new Course(++idCounter, "drtrue", "4번 항목"));
    }

    public List<Course> findAll() {
        return courses;
    }
}