import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NumberDetails } from './number-details/number-details.model';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  number = 1;
  numberSubject = new BehaviorSubject<number>(this.number);
  numbers = [1, 2, 3, 4, 5, 6];
  numbersSubject = new BehaviorSubject<number[]>(this.numbers);
  numberDetails = new NumberDetails();
  numberDetailsBehavior = new BehaviorSubject<NumberDetails>(this.numberDetails);
  constructor() {}

  getNumberObservable(): Observable<number> {
    return this.numberSubject.asObservable();
  }

  increaseNumber(): void {
    this.number = this.number + 1;
    this.numberSubject.next(this.number);
  }

  getNumbersObservable(): Observable<number[]> {
    return this.numbersSubject.asObservable();
  }

  reverseNumbers(): void{
    this.numbers = this.numbers.reverse();
    this.numbersSubject.next(this.numbers.slice());
  }

  updateDetails(): void {
    this.numberDetails.number = this.number;
    if (this.number % 2 === 0) {
      this.numberDetails.details = 'even number';
    } else {
      this.numberDetails.details = 'odd number';
    }
    this.numberDetailsBehavior.next(this.numberDetails);
  }
}
