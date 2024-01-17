import { Component } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent {
  apiKey: string = '';

  generateApiKey() {
    this.apiKey = this.generateRandomKey();
  }

  copyApiKey() {
    const apiKeyField = document.getElementById('api-key') as HTMLInputElement;
    apiKeyField.select();
    document.execCommand('copy');
  }

  private generateRandomKey(): string {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    let apiKey = '';

    for (let i = 0; i < length; i++) {
      apiKey += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return apiKey;
  }
}
