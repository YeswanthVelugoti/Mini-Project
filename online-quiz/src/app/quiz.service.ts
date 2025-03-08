import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Shakespeare', 'Dickens', 'Austen', 'Hemingway'],
      correctAnswer: 'Shakespeare',
    },
  ];

  getQuestions() {
    return this.questions;
  }

  checkAnswer(selectedAnswer: string, correctAnswer: string): boolean {
    return selectedAnswer === correctAnswer;
  }


}
