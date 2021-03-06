/**
 *  React Component for listing all the courses for an instructor.
 */
import React from 'react';
import CourseDataService from '../service/CourseDataService';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
export default function ListCoursesComponent() {
    const [courses, setCourses] = useState([]);
    const [message, setMessage] = useState(null);
    const refreshCourses = useCallback(() => {
        CourseDataService.retrieveAllCourses('drtrue').then(
            response => {
                console.log(response);
                setCourses(response.data);
            }
        );
    }, []);
    useEffect(() => {
        refreshCourses();
    }, [refreshCourses]);
    return (
        <div className="container">
            <h3>Welcome!</h3>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course =>
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}