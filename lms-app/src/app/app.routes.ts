import { Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ProgressComponent } from './components/progress/progress.component';

export const routes: Routes = [

    { path: '', redirectTo: 'course', pathMatch: 'full' },
    { path: 'course', component: CourseComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'progress', component: ProgressComponent }

];
