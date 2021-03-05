import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontAwesomeRendererComponent } from './font-awesome-renderer.component';

describe('FontAwesomeRendererComponent', () => {
  let component: FontAwesomeRendererComponent;
  let fixture: ComponentFixture<FontAwesomeRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontAwesomeRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontAwesomeRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
