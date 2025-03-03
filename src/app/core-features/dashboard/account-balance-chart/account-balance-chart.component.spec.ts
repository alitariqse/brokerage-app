import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountBalanceChartComponent } from './account-balance-chart.component';

describe('AccountBalanceChartComponent', () => {
  let component: AccountBalanceChartComponent;
  let fixture: ComponentFixture<AccountBalanceChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountBalanceChartComponent]
    });
    fixture = TestBed.createComponent(AccountBalanceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
