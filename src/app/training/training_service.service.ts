import { Injectable } from '@angular/core';
import { Exercise } from '../shared/exercise';
import { HttpClient } from '@angular/common/http';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Training_serviceService {
  constructor(private http: HttpClient) {}
  activeTrain = {};
  pastTraining = new Subject();
  private availableExercise: Exercise[] = [
    { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
  ];
  getexercise() {
    return [...this.availableExercise];
  }
  getactive(currentTrin: any) {
    this.activeTrain = this.availableExercise.filter(
      (val) => val.id === currentTrin
    );
  }
  endTrain(Current: any) {
    this.http
      .post(
        'https://ng-course-recipe-book-e4b04-default-rtdb.firebaseio.com/trainings.json',
        Current
      )
      .subscribe((data) => data);
  }

  gettrain() {
    this.http
      .get(
        'https://ng-course-recipe-book-e4b04-default-rtdb.firebaseio.com/trainings.json'
      )
      .pipe(
        map((val: any) => {
          const arr = [];
          for (let key in val) {
            arr.push(...val[key]);
          }
          return arr;
        })
      )
      .subscribe((data) => this.pastTraining.next(data));
  }

  isAuth(data: Boolean) {
    return data;
  }
}
