import { TestBed } from '@angular/core/testing';

import { StoreMovieService } from './store-movie.service';

describe('StoreMovieService', () => {
  let service: StoreMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
