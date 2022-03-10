import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStockComponent } from './main-stock.component';

describe('MainStockComponent', () => {
  let component: MainStockComponent;
  let fixture: ComponentFixture<MainStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
