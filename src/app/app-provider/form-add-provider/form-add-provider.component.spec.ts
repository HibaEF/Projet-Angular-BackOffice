import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddProviderComponent } from './form-add-provider.component';

describe('FormAddProviderComponent', () => {
  let component: FormAddProviderComponent;
  let fixture: ComponentFixture<FormAddProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
