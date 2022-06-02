import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllByProductsByCategoryComponent } from './view-all-by-products-by-category.component';

describe('ViewAllByProductsByCategoryComponent', () => {
  let component: ViewAllByProductsByCategoryComponent;
  let fixture: ComponentFixture<ViewAllByProductsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllByProductsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllByProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
