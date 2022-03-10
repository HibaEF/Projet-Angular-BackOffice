import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneStockComponent } from './show-one-stock.component';

describe('ShowOneStockComponent', () => {
  let component: ShowOneStockComponent;
  let fixture: ComponentFixture<ShowOneStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
