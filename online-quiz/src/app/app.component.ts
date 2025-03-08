import { Component } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,QuizComponent],
  template: `<app-quiz></app-quiz>`
})
export class AppComponent {
  title = 'online-quiz';
}
