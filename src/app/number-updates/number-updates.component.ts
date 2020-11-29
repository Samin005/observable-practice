import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberService } from './number.service';

@Component({
  selector: 'app-number-updates',
  templateUrl: './number-updates.component.html',
  styleUrls: ['./number-updates.component.css']
})
export class NumberUpdatesComponent implements OnInit {

  constructor(private numberService: NumberService) { }

  number$ = new Observable<number>();
  numbers$ = new Observable<number[]>();
  ngOnInit(): void {
    this.number$ = this.numberService.getNumberObservable();
    this.numbers$ = this.numberService.getNumbersObservable();
  }

  increaseNumber(): void {
    this.numberService.increaseNumber();
  }

  reverseNumbers(): void {
    this.numberService.reverseNumbers();
  }

}
