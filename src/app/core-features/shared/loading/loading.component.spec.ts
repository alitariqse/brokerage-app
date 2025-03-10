import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoadComponent } from './loading.component';

describe('SkeletonLoadComponent', () => {
  let component: SkeletonLoadComponent;
  let fixture: ComponentFixture<SkeletonLoadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkeletonLoadComponent]
    });
    fixture = TestBed.createComponent(SkeletonLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
