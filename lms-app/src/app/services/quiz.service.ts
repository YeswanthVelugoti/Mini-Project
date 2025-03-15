import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, getDocs, doc, setDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private firestore: Firestore) {}

  // Get all quizzes for a course
  getQuizzes(courseId: string): Observable<any[]> {
    const quizzesRef = collection(this.firestore, 'quizzes');
    const q = query(quizzesRef, where('courseId', '==', courseId));
    return collectionData(q);
  }

  // Submit quiz answers
  submitQuizAnswers(userId: string, quizId: string, answers: any): Promise<void> {
    const submissionDoc = doc(this.firestore, `submissions/${userId}-${quizId}`);
    return setDoc(submissionDoc, {
      answers,
      submittedAt: new Date(),
    });
  }

}
