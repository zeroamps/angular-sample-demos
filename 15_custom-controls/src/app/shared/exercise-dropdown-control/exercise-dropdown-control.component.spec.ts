import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExercisesService } from '@app/core/data';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExerciseDropdownControlComponent } from './exercise-dropdown-control.component';

describe('ExerciseDropdownControlComponent', () => {
  let component: ExerciseDropdownControlComponent;
  let fixture: ComponentFixture<ExerciseDropdownControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExerciseDropdownControlComponent],
      imports: [NgbModule],
      providers: [ExercisesService]
    }).compileComponents();

    fixture = TestBed.createComponent(ExerciseDropdownControlComponent);
    component = fixture.componentInstance;

    const service = TestBed.inject(ExercisesService);
    component.exercises = service.findAll();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
