import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneProviderComponent } from './show-one-provider.component';

describe('ShowOneProviderComponent', () => {
  let component: ShowOneProviderComponent;
  let fixture: ComponentFixture<ShowOneProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
