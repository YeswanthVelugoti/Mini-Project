import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc, getDoc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  constructor(private firestore: Firestore) {}

  // Track student progress
  trackProgress(userId: string, courseId: string, progress: any): Promise<void> {
    const progressDoc = doc(this.firestore, `progress/${userId}-${courseId}`);
    return setDoc(progressDoc, progress);
  }

  // Get progress for a student
  getProgress(userId: string, courseId: string): Observable<any> {
    const progressDoc = doc(this.firestore, `progress/${userId}-${courseId}`);
    return docData(progressDoc);
  }
}
