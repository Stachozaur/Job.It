import { TestBed } from '@angular/core/testing';
import { UserTaskService } from './userTask.service';



describe('SpecialistService', () => {
  let service: UserTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
