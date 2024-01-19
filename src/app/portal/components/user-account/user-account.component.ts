import { Component } from '@angular/core';
import { ApiKeys } from '../../interfaces/api-keys';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class UserAccountComponent {
  apiKey: string = '';
  dataSource: ApiKeys[] = this.generateDummyData();
  displayedColumns: string[] = [
    'apiName',
    'apiKey',
    'generatedDate',
    'revoked',
    'actions',
  ];

  generateApiKey() {
    this.apiKey = this.generateRandomKey();
  }

  generateDummyData(): ApiKeys[] {
    const dummyData: ApiKeys[] = [];
    for (let i = 1; i <= 5; i++) {
      const apiKey: ApiKeys = {
        apiName: `Api ${i}`,
        apiKey: `API_KEY_${i}`,
        generatedDate: new Date(),
        revoked: false,
      };

      dummyData.push(apiKey);
    }

    return dummyData;
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

  revokeApiKey(apiKey: ApiKeys) {
    apiKey.revoked = true;
  }
}
