import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DebounceComponent } from './debounce.component';

describe('DebounceComponent', () => {
  let component: DebounceComponent;
  let fixture: ComponentFixture<DebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebounceComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
