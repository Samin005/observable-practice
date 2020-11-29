import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberService } from '../number.service';
import { NumberDetails } from './number-details.model';

@Component({
  selector: 'app-number-details',
  templateUrl: './number-details.component.html',
  styleUrls: ['./number-details.component.css']
})
export class NumberDetailsComponent implements OnInit {

  numberDetails$ = new Observable<NumberDetails>();
  number$ = new Observable<number>();
  constructor(private numberService: NumberService) { }

  ngOnInit(): void {
    this.numberDetails$ = this.numberService.numberDetailsBehavior.asObservable();
    this.number$ = this.numberService.numberSubject.asObservable();
  }

  updateDetails(): void {
    this.numberService.updateDetails();
  }

}
