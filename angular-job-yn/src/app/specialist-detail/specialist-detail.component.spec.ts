import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistDetailComponent } from './specialist-detail.component';

describe('SpecialistDetailComponent', () => {
  let component: SpecialistDetailComponent;
  let fixture: ComponentFixture<SpecialistDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialistDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
