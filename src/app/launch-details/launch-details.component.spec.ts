import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LaunchDetailsComponent } from './launch-details.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { mockLaunch } from '../MockLaunchData';
import { LaunchService } from '../launch.service';
import { By } from '@angular/platform-browser';

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;
  let activatedRouteSpy;
  let httpMock: HttpTestingController;
  let launchService: LaunchService;

  beforeEach(async () => {
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          flight_num: 1,
        })
      }
    };

    await TestBed.configureTestingModule({
      declarations: [LaunchDetailsComponent],
      imports: [HttpClientTestingModule],
      providers: [
      LaunchService,
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy
        }
      ]
    }).compileComponents();
    
    httpMock = TestBed.inject(HttpTestingController);
    launchService = TestBed.inject(LaunchService);

    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make a post call', () => {
    const req = httpMock.expectOne("https://api.spacexdata.com/v5/launches/query");
    expect(req.request.method).toBe('POST');
    req.flush(mockLaunch);
  })
});
