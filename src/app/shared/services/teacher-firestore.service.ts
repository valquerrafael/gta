import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import { Teacher } from '../model/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherFirestoreService {

  teachersCollection: AngularFirestoreCollection<Teacher>;
  COLLECTION_NAME = 'teachers';

  constructor(private afs: AngularFirestore) {
    this.teachersCollection = afs.collection(this.COLLECTION_NAME);
  }

  insert(teacher: Teacher): Observable<object> {
    delete teacher.id;

    return from(this.teachersCollection.add({...teacher}));
  }

  get(id: string): Observable<Teacher> {
    return this.teachersCollection
      .doc(id).get().pipe(map(document => {
        return new Teacher(document.data(), document.id);
      }));
  }

  update(teacher: Teacher): Observable<void> {
    const id = teacher.id;
    delete teacher.id;

    return from(this.teachersCollection.doc(id).update({...teacher}));
  }

  delete(id: string): Observable<void> {
    return from(this.teachersCollection.doc(id).delete());
  }

  getAll(): Observable<Teacher[]> {
    return this.teachersCollection.valueChanges({idField: 'id'});
  }
}
