import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeCalcComponent } from './exchange-calc.component';

describe('ExchangeCalcComponent', () => {
  let component: ExchangeCalcComponent;
  let fixture: ComponentFixture<ExchangeCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
