import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberUpdatesComponent } from './number-updates.component';

describe('NumberUpdatesComponent', () => {
  let component: NumberUpdatesComponent;
  let fixture: ComponentFixture<NumberUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
