import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {
  findAll() {
    return [
      {
        id: 'bf371801-a3cb-4f78-ac69-46e585f5360b',
        name: 'Walking',
        categories: ['For you', 'Aerobics'],
        color: 'bg-danger'
      },
      {
        id: '975af771-6265-4afd-b0f5-1d226d54ec0f',
        name: 'Running',
        categories: ['For you', 'Aerobics'],
        color: 'bg-danger'
      },
      {
        id: '8cbef794-028a-4561-aed5-6079f6008fa9',
        name: 'Cycling',
        categories: ['Aerobics'],
        color: 'bg-danger'
      },
      {
        id: 'ae4daded-7059-4675-afdc-387e8d51b6d4',
        name: 'Full-Body',
        categories: ['Strength'],
        color: 'bg-primary'
      },
      {
        id: 'e28d2c77-5f1d-4a46-932c-39603ede73a2',
        name: 'Arms',
        categories: ['For you', 'Strength'],
        color: 'bg-primary'
      },
      {
        id: 'fff51ee5-eadc-452d-9381-51030f29417a',
        name: 'Back',
        categories: ['Strength'],
        color: 'bg-primary'
      },
      {
        id: 'ac4494cb-1d24-4724-b828-320f6ce56df5',
        name: 'Functional',
        categories: ['Strength'],
        color: 'bg-primary'
      },
      {
        id: 'efa3ad3c-8644-47c5-9db5-176e87a6ff4c',
        name: 'Basketball',
        categories: ['Sports'],
        color: 'bg-warning'
      },
      {
        id: '233f5fd8-4647-4321-aca5-383dbdcd812a',
        name: 'Football',
        categories: ['For you', 'Sports'],
        color: 'bg-warning'
      },
      {
        id: '8ba90961-7402-4b43-b55b-ad370da1be24',
        name: 'Squash',
        categories: ['Sports'],
        color: 'bg-warning'
      },
      {
        id: '1549ac50-73c3-4cb0-94c4-131bd0953a61',
        name: 'Gym',
        categories: ['Others'],
        color: 'bg-success'
      },
      {
        id: 'd5a7b79e-c9c2-4e9d-bc4f-6986420b229d',
        name: 'Yoga',
        categories: ['Others'],
        color: 'bg-success'
      },
      {
        id: 'e2222be3-251a-4841-bf6d-ebd10cb65542',
        name: 'Meditation',
        categories: ['Others'],
        color: 'bg-success'
      }
    ];
  }
}
