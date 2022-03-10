import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProStockComponent } from './pro-stock.component';

describe('ProStockComponent', () => {
  let component: ProStockComponent;
  let fixture: ComponentFixture<ProStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
