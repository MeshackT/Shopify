import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllByProductsByDateComponent } from './view-all-by-products-by-date.component';

describe('ViewAllByProductsByDateComponent', () => {
  let component: ViewAllByProductsByDateComponent;
  let fixture: ComponentFixture<ViewAllByProductsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllByProductsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllByProductsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
