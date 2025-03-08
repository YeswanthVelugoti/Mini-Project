import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [FormsModule,CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {

  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswer: string = '';
  score: number = 0;
  timer: number = 30; // Timer set to 30 seconds
  interval: any;
  isQuizOver: boolean = false;

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
    this.startTimer();
  }

  // Start the timer
  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.endQuiz();
      }
    }, 1000);
  }

  // Stop the timer when the quiz ends
  stopTimer(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  // Next question after user selects an answer
  nextQuestion(): void {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (this.quizService.checkAnswer(this.selectedAnswer, currentQuestion.correctAnswer)) {
      this.score++;
    }

    // Move to the next question
    this.currentQuestionIndex++;

    // Reset selected answer
    this.selectedAnswer = '';

    // If there are no more questions, end the quiz
    if (this.currentQuestionIndex === this.questions.length) {
      this.endQuiz();
    }
  }

  // End the quiz and stop the timer
  endQuiz(): void {
    this.isQuizOver = true;
    this.stopTimer();
  }

  // Restart the quiz
  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.timer = 30;
    this.isQuizOver = false;
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }


}
