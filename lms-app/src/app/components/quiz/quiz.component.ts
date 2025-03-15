import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit{

  @Input() 
  courseId!: string;
  quizzes: any[] = [];
  userAnswers: any = {};

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.getQuizzes(this.courseId).subscribe((quizzes) => {
      this.quizzes = quizzes;
    });
  }

  submitQuiz(): void {
    // Assume userId is fetched from the authentication system
    const userId = 'user123';
    this.quizService.submitQuizAnswers(userId, this.courseId, this.userAnswers).then(() => {
      alert('Quiz Submitted!');
    });
  }

}
