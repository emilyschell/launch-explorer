import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LaunchService } from './launch.service';
import { mockLaunch } from './MockLaunchData';

describe('LaunchService', () => {
  let service: LaunchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LaunchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a post call to get launches data', (done) => {
    service.getLaunches(1, 3, "name").subscribe((res) => {
      expect(res).toBe(mockLaunch);
      done();
    })
    const req = httpMock.expectOne("https://api.spacexdata.com/v5/launches/query");
    expect(req.request.method).toBe('POST');
    req.flush(mockLaunch);
  });

    it('should make a post call to get single launch data', (done) => {
    service.getLaunch("1").subscribe((res) => {
      expect(res).toBe(mockLaunch);
      done();
    })
    const req = httpMock.expectOne("https://api.spacexdata.com/v5/launches/query");
    expect(req.request.method).toBe('POST');
    req.flush(mockLaunch);
  });
});
