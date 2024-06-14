import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchesComponent } from './launches.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;
  let selector: DebugElement;
  let nextButton: DebugElement;
  let prevButton: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaunchesComponent],
      imports: [HttpClientTestingModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaunchesComponent);
    selector = fixture.debugElement.query(By.css("#selector"));
    nextButton = fixture.debugElement.query(By.css("#next-button"));
    prevButton = fixture.debugElement.query(By.css("#prev-button"));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display expected elements', () => {
    expect(selector).toBeTruthy();
    expect(nextButton).toBeTruthy();
    expect(prevButton).toBeTruthy();
  });

  it('should set sortBy when selector changed', () => {
    expect(component.sortBy).toBe(null);
    selector.nativeElement.value = "name";
    selector.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.sortBy).toBe("name");
  });

  it('should advance page when next button pressed', () => {
    expect(component.page).toBe(1);
    expect(prevButton.nativeElement.disabled).toBeTrue();
    nextButton.nativeElement.click();
    expect(component.page).toBe(2);
  });
});
