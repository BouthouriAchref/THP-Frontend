import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesToCheckComponent } from './places-to-check.component';

describe('PlacesToCheckComponent', () => {
  let component: PlacesToCheckComponent;
  let fixture: ComponentFixture<PlacesToCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesToCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesToCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
