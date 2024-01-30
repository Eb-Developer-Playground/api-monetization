import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarServiceService {
  constructor(private snackbar: MatSnackBar) {}

  open(
    message: string,
    action: string = 'Close',
    duration: number = 3000,
    config?: MatSnackBarConfig
  ): void {
    const snackbarConfig: MatSnackBarConfig = {
      duration,
      ...config,
    };
    this.snackbar.open(message, action, snackbarConfig);
  }
}
