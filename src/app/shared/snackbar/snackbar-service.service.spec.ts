import { TestBed } from '@angular/core/testing';

import { SnackbarServiceService } from './snackbar-service.service';
import { MaterialModule } from 'src/material.module';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

describe('SnackbarServiceService', () => {
  let service: SnackbarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
    });
    service = TestBed.inject(SnackbarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
