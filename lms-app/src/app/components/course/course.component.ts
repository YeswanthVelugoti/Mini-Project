import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  imports: [FormsModule,CommonModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {

  courses: any[] = [];
  courseTitle: string = '';
  courseDescription: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  addCourse(): void {
    const newCourse = {
      title: this.courseTitle,
      description: this.courseDescription,
      createdAt: new Date(),
    };
    this.courseService.addCourse(newCourse).then(() => {
      this.courseTitle = '';
      this.courseDescription = '';
    });
  }

}
