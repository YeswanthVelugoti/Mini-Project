import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc, doc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private firestore: Firestore) {}

  // Get all courses
  getCourses(): Observable<any[]> {
    const coursesCollection = collection(this.firestore, 'courses');
    return collectionData(coursesCollection, { idField: 'id' }) as Observable<any[]>;
  }

  // Add a new course
  addCourse(course: any): Promise<void> {
    const id = doc(this.firestore, `courses/${this.createId()}`);
    return setDoc(id, course);
  }

  // Generate a unique ID (since createId() was part of AngularFirestore before)
  private createId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
