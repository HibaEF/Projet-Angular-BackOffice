import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneProductComponent } from './show-one-product.component';

describe('ShowOneProductComponent', () => {
  let component: ShowOneProductComponent;
  let fixture: ComponentFixture<ShowOneProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
