import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddStockComponent } from './form-add-stock.component';

describe('FormAddStockComponent', () => {
  let component: FormAddStockComponent;
  let fixture: ComponentFixture<FormAddStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
